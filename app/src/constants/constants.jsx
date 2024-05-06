import { PublicKey } from "@solana/web3.js";

const isMainnet = true;

export const GLOBAL_STATE_SEED = "GLOBAL-STATE-SEED";
export const PRESALE_STATE_SEED = "PRESALE-STATE-SEED";
export const USER_STATE_SEED = "USER-STATE-SEED";
export const VAULT_SEED = "VAULT-SEED";
export const VAULT_STATE_SEED = "VAULT-STATE-SEED";

export const NETWORK_URL = isMainnet ? "https://mainnet.helius-rpc.com/?api-key=4b385796-cada-43ff-bd97-d54667dd5a5d" : "https://api.devnet.solana.com";

export const PROGRAM_ID = new PublicKey(
  isMainnet ? "5CFsk1J86BfW1yib5GWdsPsnxDvNPmHZSjeaj79sqyL6" : "5CFsk1J86BfW1yib5GWdsPsnxDvNPmHZSjeaj79sqyL6"
);

export const LEON_TOKEN = new PublicKey(
  isMainnet ? "FPtmRDVykezcB71pEr6pemvfVMvg78KdH6DhWSdkDraX" : "8PY9EK5u91trGp76EKKRuaAUjV83WGWNCLPdy9DYEXLR"
);

export const AUTHORITY = new PublicKey(
  isMainnet ? "2pe4E9ASzaCoaDUXnJsSDYKrj8q1B4qXaByrj6XBbjsu" : "2pe4E9ASzaCoaDUXnJsSDYKrj8q1B4qXaByrj6XBbjsu"
);

export const PRESALE_ID = 0;
export const TOKEN_PRESALE_HARDCAP = 100000000; // token
export const PRICE_PER_TOKEN = 0.00001; // sol
export const START_TIME = "2024-04-19T05:00:00-04:00";  // EDT
// export const START_TIME = "2024-02-26T01:30:00+09:00";  // EDT
export const END_TIME = "2024-04-22T05:00:00-04:00";  // EDT
// export const END_TIME = "2024-02-26T07:25:00+09:00"; // EDT
export const PRESALE_UPDATE = false;   // presale update

export const BUYER_SOFTCAP = 0.1; // sol
export const BUYER_HARDCAP = 10; // sol
export const BUYER_TOKEN_HARDCAP = 1000000; // token

export const TOKEN_DECIMAL = isMainnet ? 6 : 9;
export const QUOTE_TOKEN_DECIMAL = 9;

export const DEPOSIT_TOKEN_AMOUNT = TOKEN_PRESALE_HARDCAP;
export const SHOW_UPDATE_CONFIG = false;
export const UPDATE_CONFIG = false;