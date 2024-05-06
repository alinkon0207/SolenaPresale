import {
    useAnchorWallet,
    useConnection,
    useWallet,
  } from "@solana/wallet-adapter-react";
  import { useEffect, useMemo, useState } from "react";
  import * as anchor from "@project-serum/anchor";
  import { IDL } from "../idl/token_presale";
  import { findProgramAddressSync } from "@project-serum/anchor/dist/cjs/utils/pubkey";
  import {
    BUYER_HARDCAP,
    BUYER_TOKEN_HARDCAP,
    AUTHORITY,
    PRESALE_ID,
    PROGRAM_ID,
    PRESALE_STATE_SEED,
    PRICE_PER_TOKEN,
    TOKEN_DECIMAL,
    TOKEN_PRESALE_HARDCAP,
    LEON_TOKEN,
    USER_STATE_SEED,
    GLOBAL_STATE_SEED,
    QUOTE_TOKEN_DECIMAL,
    START_TIME,
    END_TIME,
    DEPOSIT_TOKEN_AMOUNT,
    SHOW_UPDATE_CONFIG,
    UPDATE_CONFIG,
  } from "@/constants/constants";
  import { toast } from "react-toastify";
  import { SystemProgram, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
  import { utf8 } from "@project-serum/anchor/dist/cjs/utils/bytes";
  import { ASSOCIATED_PROGRAM_ID } from "@project-serum/anchor/dist/cjs/utils/token";
  import { getGlobalStateKey, getPresaleStateKey, getTokenAccount, getUserStateKey, getVaultKey, getVaultStateKey } from "./keys";
  import { SYSVAR_RENT_PUBKEY } from "@solana/web3.js";
  import { BigNumber } from "bignumber.js";
  import { TOKEN_PROGRAM_ID } from "../../node_modules/@project-serum/anchor/dist/cjs/utils/token";
  
  export default function usePresale() {
    const { publicKey } = useWallet();
    const anchorWallet = useAnchorWallet();
    const { connection } = useConnection();
    const [transactionPending, setTransactionPending] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const [isInitialized, setIsInitialized] = useState(false);
    const [presaleStage, setPresaleStage] = useState(0);
    const [isAdmin, setIsAdmin] = useState(false);
    
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [buyAmount, setBuyAmount] = useState(0);
    const [claimAmount, setClaimAmount] = useState(0);
    const [totalBuyAmount, setTotalBuyAmount] = useState(0);
    const [depositTokenAmount, setDepositTokenAmount] = useState(0);
    const [withdrawTokenAmount, setWithdrawTokenAmount] = useState("0");
    
    const [vaultBalance, setVaultBalance] = useState("0");
    const [vaultState, setVaultState] = useState(false);
  
    const program = useMemo(() => {
      // if (anchorWallet) {
        const provider = new anchor.AnchorProvider(
          connection,
          anchorWallet,
          anchor.AnchorProvider.defaultOptions()
        );
        return new anchor.Program(IDL, PROGRAM_ID, provider);
      // }
    }, [connection, anchorWallet]);
  
    useEffect(() => {
      // console.log("usePresale useEffect log - 1 : ", program, transactionPending);
  
      const getGlobalState = async () => {
        if (program && !transactionPending) {
          try {
            setLoading(true);
            
            const globalStateData= await program.account.globalState.fetch(
              await getGlobalStateKey()
            );
            setIsInitialized(globalStateData.isInitialized);
            setPresaleStage(globalStateData.presaleStage);
            setIsAdmin(globalStateData?.authority?.toString() === publicKey?.toString());
            
            console.log("getGlobalState log - 1 : ", globalStateData.authority.toString());
            console.log("getGlobalState log - 1 : ", globalStateData.authority === publicKey);
          } catch (error) {
            setIsAdmin(publicKey?.toString() == AUTHORITY.toString());
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      const getVaultBalance = async () => {
        const vaultKey = await getVaultKey();
        const balance = new BigNumber(
          await connection.getBalance(
            vaultKey
          )
        )
        .div(LAMPORTS_PER_SOL)
        .toString();
        setVaultBalance(balance);
        
        console.log("getVaultBalance log - 1 : ", balance);
        console.log("getVaultBalance log - 2 : ", vaultKey.toString());
      };
  
      const getVaultState = async () => {
        if (program && !transactionPending) {
          try {
            setLoading(true);
            
            const vaultStateData = await program.account.vaultState.fetch(
              await getVaultStateKey()
            );
            setVaultState(vaultStateData.isInitialized);
            
            console.log("getVaultState log - 1 : ", vaultStateData);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      const getPresaleInfo = async () => {
        if (program && !transactionPending) {
          try {
            setLoading(true);
            
            const presaleInfo = await program.account.presaleInfo.fetch(
              await getPresaleStateKey()
            );
            const withdrawAmount = 
              new anchor.BN(presaleInfo.depositTokenAmount)
                .sub(new anchor.BN(presaleInfo.soldTokenAmount))
                .div(new anchor.BN(10 ** TOKEN_DECIMAL))
                .toString();
            console.log("###################", withdrawAmount);
            console.log("*******************", presaleInfo.soldTokenAmount.toString());
            console.log("*******************", presaleInfo.pricePerToken.toString());
            
            setStartTime(presaleInfo.startTime);
            setEndTime(presaleInfo.endTime);
            setDepositTokenAmount(presaleInfo.depositTokenAmount);
            setTotalBuyAmount(presaleInfo.soldTokenAmount);
            setWithdrawTokenAmount(withdrawAmount);
            
            console.log("getPresaleInfo log - 1 : ", presaleInfo);
            console.log("getPresaleInfo log - 2 : ", presaleInfo.startTime.toString());
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      const getUserInfo = async () => {
        if (program && publicKey && !transactionPending) {
          try {
            setLoading(true);
            const userInfo = await program.account.userInfo.fetch(
              await getUserStateKey(publicKey)
            );
            setBuyAmount(userInfo.buyTokenAmount);
            setClaimAmount(userInfo.claimAmount);
            console.log("User Info : ", userInfo);
          } catch (error) {
            console.log(error);
          } finally {
            setLoading(false);
          }
        }
      };
  
      getGlobalState();
      getPresaleInfo();
      getUserInfo();
      getVaultBalance();
      getVaultState();
    }, [publicKey, program, transactionPending, connection, anchorWallet]);
  
    const initialize = async () => {
      if (program && publicKey && !isInitialized) {
        try {
          setTransactionPending(true);
          
          const tx = await program.methods
            .initialize()
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              vault: await getVaultKey(),
              vaultState: await getVaultStateKey(),
              systemProgram: SystemProgram.programId,
              rent: SYSVAR_RENT_PUBKEY
            })
            .rpc();
          toast.success("Successfully initialized contract.");
          return true;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const createPresale = async () => {
      if (program && publicKey && PRESALE_ID == presaleStage) {
        try {
          setTransactionPending(true);
          
          const bigIntHardcap =
            new anchor.BN(TOKEN_PRESALE_HARDCAP).mul(new anchor.BN(10 ** TOKEN_DECIMAL));
          const bigIntBuyerHardcap =
            new anchor.BN(BUYER_TOKEN_HARDCAP).mul(new anchor.BN(10 ** TOKEN_DECIMAL));
          const tokenPrice = 
            new anchor.BN(10 ** QUOTE_TOKEN_DECIMAL * PRICE_PER_TOKEN);
          const startTime = new Date(START_TIME).getTime() / 1000;
          const endTime = new Date(END_TIME).getTime() / 1000;
          console.log("***************", startTime);
  
          const tx = await program.methods
            .createPresale(
              TOKEN_DECIMAL,
              new anchor.BN(10 ** TOKEN_DECIMAL), // softcap
              bigIntHardcap, // hardcap
              bigIntBuyerHardcap, // maxTokenAmountPerAddress
              tokenPrice, // price per token
              new anchor.BN(startTime), // start time
              new anchor.BN(endTime) // end time
            )
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              presaleInfo: await getPresaleStateKey(),
              tokenMint: LEON_TOKEN,
              quoteTokenMint: PublicKey.default,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
          toast.success("Successfully created presale.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const updatePresale = async () => {
      if (program && publicKey && PRESALE_ID < presaleStage) {
        try {
          setTransactionPending(true);
          
          const bigIntHardcap =
            new anchor.BN(TOKEN_PRESALE_HARDCAP).mul(new anchor.BN(10 ** TOKEN_DECIMAL));
          const bigIntBuyerHardcap =
            new anchor.BN(BUYER_TOKEN_HARDCAP).mul(new anchor.BN(10 ** TOKEN_DECIMAL));
          const tokenPrice = 
            new anchor.BN(10 ** QUOTE_TOKEN_DECIMAL * PRICE_PER_TOKEN);
          const startTime = new Date(START_TIME).getTime() / 1000;
          const endTime = new Date(END_TIME).getTime() / 1000;
          console.log("***************", tokenPrice.toString());
  
          const tx = await program.methods
          .updatePresale(
              PRESALE_ID, // presale id
              TOKEN_DECIMAL,
              new anchor.BN(10 ** TOKEN_DECIMAL), //softcapAmount
              bigIntHardcap, // hardcapAmount
              bigIntBuyerHardcap, // maxTokenAmountPerAddress
              tokenPrice, // pricePerToken
              new anchor.BN(startTime), // start time
              new anchor.BN(endTime), // end time
            )
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              presaleInfo: await getPresaleStateKey(),
              tokenMint: LEON_TOKEN,
              quoteTokenMint: PublicKey.default,
              systemProgram: SystemProgram.programId,
            })
            .rpc();
          toast.success("Successfully updated presale.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const depositToken = async () => {
      if (program && publicKey) {
        try {
          setTransactionPending(true);
          
          const depositAmount =
            new anchor.BN(DEPOSIT_TOKEN_AMOUNT).mul(new anchor.BN(10 ** TOKEN_DECIMAL));
          const presaleStateKey = await getPresaleStateKey();
          
          const tx = await program.methods
            .depositToken(
              PRESALE_ID, // presale id
              depositAmount // deposit amount
            )
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              presaleInfo: presaleStateKey,
              tokenMint: LEON_TOKEN,
              presaleTokenAccount: await getTokenAccount(LEON_TOKEN, presaleStateKey),
              authorityTokenAccount: await getTokenAccount(LEON_TOKEN, publicKey),
              systemProgram: SystemProgram.programId,
              tokenProgram: TOKEN_PROGRAM_ID,
              associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Successfully deposited token.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const withdrawSol = async () => {
      if (program && publicKey) {
        try {
          setTransactionPending(true);
          
          const vaultKey = await getVaultKey();
          const balance = new anchor.BN(
            await connection.getBalance(
              vaultKey
            )
          );
          const tx = await program.methods
            .withdrawSol(balance)
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              vault: vaultKey,
              vaultState: await getVaultStateKey(),
              systemProgram: SystemProgram.programId,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Successfully withdrawed sol.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const withdrawToken = async () => {
      if (program && publicKey) {
        try {
          setTransactionPending(true);
          
          const presaleStateKey = await getPresaleStateKey();
  
          const withdrawAmount = 
              new anchor.BN(depositTokenAmount).sub(new anchor.BN(totalBuyAmount));
  
          const tx = await program.methods
            .withdrawToken(
              PRESALE_ID,
              withdrawAmount,
            )
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              presaleInfo: presaleStateKey,
              tokenMint: LEON_TOKEN,
              presaleTokenAccount: await getTokenAccount(LEON_TOKEN, presaleStateKey),
              authorityTokenAccount: await getTokenAccount(LEON_TOKEN, publicKey),
              systemProgram: SystemProgram.programId,
              tokenProgram: TOKEN_PROGRAM_ID,
              associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Token withdraw was successful.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const updateConfig = async () => {
      if (program && publicKey && SHOW_UPDATE_CONFIG) {
        try {
          setTransactionPending(true);
          
          const tx = await program.methods
            .updateConfig(UPDATE_CONFIG)
            .accounts({
              authority: publicKey,
              globalState: await getGlobalStateKey(),
              vaultState: await getVaultStateKey(),
              systemProgram: SystemProgram.programId,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Update config was successful.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const buyToken = async (quoteAmount) => {
      if (program && publicKey) {
        try {
          setTransactionPending(true);
          
          const tx = await program.methods
            .buyToken(
              PRESALE_ID,
              new anchor.BN(10 ** TOKEN_DECIMAL * quoteAmount)
            )
            .accounts({
              user: publicKey,
              authority: AUTHORITY,
              globalState: await getGlobalStateKey(),
              presaleInfo: await getPresaleStateKey(),
              userInfo: await getUserStateKey(publicKey),
              vault: await getVaultKey(),
              systemProgram: SystemProgram.programId,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Token purchase was successful.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    const claimToken = async () => {
      if (program && publicKey) {
        try {
          setTransactionPending(true);
          
          const presaleStateKey = await getPresaleStateKey();
  
          const tx = await program.methods
            .claimToken(PRESALE_ID)
            .accounts({
              user: publicKey,
              presaleInfo: presaleStateKey,
              userInfo: await getUserStateKey(publicKey),
              tokenMint: LEON_TOKEN,
              presaleTokenAccount: await getTokenAccount(LEON_TOKEN, presaleStateKey),
              userTokenAccount: await getTokenAccount(LEON_TOKEN, publicKey),
              systemProgram: SystemProgram.programId,
              tokenProgram: TOKEN_PROGRAM_ID,
              associatedTokenProgram: ASSOCIATED_PROGRAM_ID,
              rent: SYSVAR_RENT_PUBKEY,
            })
            .rpc();
          toast.success("Token claim was successful.");
          return false;
        } catch (error) {
          console.log(error);
          toast.error(error.toString());
          return false;
        } finally {
          setTransactionPending(false);
        }
      }
    };
  
    return {
      initialize,
      createPresale,
      updatePresale,
      depositToken,
      withdrawSol,
      withdrawToken,
      updateConfig,
      buyToken,
      claimToken,
      isInitialized,
      isAdmin,
      presaleStage,
      startTime,
      endTime,
      buyAmount,
      claimAmount,
      totalBuyAmount,
      withdrawTokenAmount,
      transactionPending,
      vaultState,
      vaultBalance,
    };
  }
  