import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0x9E97D1bA82Fa45BCEfD9b7E2217Fa212Fe19c8c4";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://eth-goerli.g.alchemy.com/v2/dQwxe1HYRm6KuvlxVJBg6PTwbJ4UbraO",
  },
};
