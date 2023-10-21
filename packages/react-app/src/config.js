import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xE22aD5077E6a292F196E7B8D3034d794de2564b2";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://app.zeeve.io/shared-api/eth/d932c549e9127592ce5d0d8434f7f5bbde5448d1e6f7633b/",
  },
};
