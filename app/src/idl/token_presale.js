export const TokenPresale = {
    "version": "0.1.0",
    "name": "token_presale",
    "instructions": [
      {
        "name": "initialize",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "updateAuth",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "newAuthority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": []
      },
      {
        "name": "updateConfig",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      },
      {
        "name": "createPresale",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteTokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "tokenDecimal",
            "type": "u8"
          },
          {
            "name": "softcapAmount",
            "type": "u64"
          },
          {
            "name": "hardcapAmount",
            "type": "u64"
          },
          {
            "name": "maxTokenAmountPerAddress",
            "type": "u64"
          },
          {
            "name": "pricePerToken",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "updatePresale",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "quoteTokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "tokenDecimal",
            "type": "u8"
          },
          {
            "name": "softcapAmount",
            "type": "u64"
          },
          {
            "name": "hardcapAmount",
            "type": "u64"
          },
          {
            "name": "maxTokenAmountPerAddress",
            "type": "u64"
          },
          {
            "name": "pricePerToken",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      },
      {
        "name": "depositToken",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "presaleTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "authorityTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "buyToken",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "authority",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "quoteAmount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "claimToken",
        "accounts": [
          {
            "name": "user",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "presaleTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "userTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "identifier",
            "type": "u8"
          }
        ]
      },
      {
        "name": "withdrawSol",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vault",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "vaultState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      },
      {
        "name": "withdrawToken",
        "accounts": [
          {
            "name": "authority",
            "isMut": true,
            "isSigner": true
          },
          {
            "name": "globalState",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "presaleInfo",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "tokenMint",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "presaleTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "authorityTokenAccount",
            "isMut": true,
            "isSigner": false
          },
          {
            "name": "systemProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "tokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "associatedTokenProgram",
            "isMut": false,
            "isSigner": false
          },
          {
            "name": "rent",
            "isMut": false,
            "isSigner": false
          }
        ],
        "args": [
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "amount",
            "type": "u64"
          }
        ]
      }
    ],
    "accounts": [
      {
        "name": "GlobalState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "authority",
              "type": "publicKey"
            },
            {
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "name": "presaleStage",
              "type": "u8"
            },
            {
              "name": "vault",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "VaultState",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "isInitialized",
              "type": "bool"
            },
            {
              "name": "vault",
              "type": "publicKey"
            }
          ]
        }
      },
      {
        "name": "PresaleInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "identifier",
              "type": "u8"
            },
            {
              "name": "tokenMint",
              "type": "publicKey"
            },
            {
              "name": "tokenDecimal",
              "type": "u8"
            },
            {
              "name": "quoteTokenMint",
              "type": "publicKey"
            },
            {
              "name": "softcapAmount",
              "type": "u64"
            },
            {
              "name": "hardcapAmount",
              "type": "u64"
            },
            {
              "name": "realAmount",
              "type": "u64"
            },
            {
              "name": "depositTokenAmount",
              "type": "u64"
            },
            {
              "name": "soldTokenAmount",
              "type": "u64"
            },
            {
              "name": "maxTokenAmountPerAddress",
              "type": "u64"
            },
            {
              "name": "pricePerToken",
              "type": "u64"
            },
            {
              "name": "startTime",
              "type": "u64"
            },
            {
              "name": "endTime",
              "type": "u64"
            }
          ]
        }
      },
      {
        "name": "UserInfo",
        "type": {
          "kind": "struct",
          "fields": [
            {
              "name": "user",
              "type": "publicKey"
            },
            {
              "name": "identifier",
              "type": "u8"
            },
            {
              "name": "buyQuoteAmount",
              "type": "u64"
            },
            {
              "name": "buyTokenAmount",
              "type": "u64"
            },
            {
              "name": "buyTime",
              "type": "u64"
            },
            {
              "name": "claimAmount",
              "type": "u64"
            },
            {
              "name": "claimTime",
              "type": "u64"
            }
          ]
        }
      }
    ],
    "errors": [
      {
        "code": 6000,
        "name": "Unauthorized",
        "msg": "You are not authorized to perform this action."
      },
      {
        "code": 6001,
        "name": "NotAllowed",
        "msg": "Not allowed"
      },
      {
        "code": 6002,
        "name": "MathOverflow",
        "msg": "Math operation overflow"
      },
      {
        "code": 6003,
        "name": "PresaleNotStarted",
        "msg": "Presale not started yet"
      },
      {
        "code": 6004,
        "name": "PresaleEnded",
        "msg": "Presale already ended"
      },
      {
        "code": 6005,
        "name": "InsufficentTokenAmount",
        "msg": "Insufficent token amount"
      },
      {
        "code": 6006,
        "name": "MaxUserLimit",
        "msg": "Overflow max user limit"
      },
      {
        "code": 6007,
        "name": "PresaleNotEnded",
        "msg": "Presale not ended yet"
      },
      {
        "code": 6008,
        "name": "AlreadyClaimed",
        "msg": "Already claimed"
      }
    ],
    "metadata": {
      "address": "5CFsk1J86BfW1yib5GWdsPsnxDvNPmHZSjeaj79sqyL6"
    }
  }