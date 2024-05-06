import { PublicKey } from "@solana/web3.js";
import * as anchor from "@project-serum/anchor";

import {
    PROGRAM_ID,
    AUTHORITY,
    GLOBAL_STATE_SEED,
    PRESALE_STATE_SEED,
    USER_STATE_SEED,
    VAULT_SEED,
    PRESALE_ID,
    VAULT_STATE_SEED
  } from "@/constants/constants";
import { associatedAddress } from "../../node_modules/@project-serum/anchor/dist/cjs/utils/token";

export const getGlobalStateKey = async () => {
  const [globalStateKey] = await asyncGetPda(
    [Buffer.from(GLOBAL_STATE_SEED), AUTHORITY.toBuffer()],
    PROGRAM_ID
  );
  console.log("[Global state key] ===============> ", globalStateKey.toString())
  return globalStateKey;
};

export const getPresaleStateKey = async () => {
  const [presaleStateKey] = await asyncGetPda(
    [Buffer.from(PRESALE_STATE_SEED), Buffer.from(new Uint8Array([PRESALE_ID]))],
    PROGRAM_ID
  );
  return presaleStateKey;
};

export const getVaultKey = async () => {
  const [vaultKey] = await asyncGetPda(
    [Buffer.from(VAULT_SEED)],
    PROGRAM_ID
  );
  return vaultKey;
};

export const getVaultStateKey = async () => {
  const [vaultStateKey] = await asyncGetPda(
    [Buffer.from(VAULT_STATE_SEED)],
    PROGRAM_ID
  );
  return vaultStateKey;
};

export const getUserStateKey = async (userKey) => {
  const [userStateKey] = await asyncGetPda(
    [Buffer.from(USER_STATE_SEED), userKey.toBuffer(), Buffer.from(new Uint8Array([PRESALE_ID]))],
    PROGRAM_ID
  );
  return userStateKey;
};

export const getTokenAccount = async (mintKey, userKey) => {
  return await associatedAddress({
    mint: mintKey,
    owner: userKey,
  });
}

const asyncGetPda = async (
  seeds,
  programId
) => {
  const [pubKey, bump] = await PublicKey.findProgramAddress(seeds, programId);
  return [pubKey, bump];
};
