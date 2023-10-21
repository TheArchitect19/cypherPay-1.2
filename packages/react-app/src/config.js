import { Goerli } from "@usedapp/core";

export const ROUTER_ADDRESS = "0xc8F7DBcCd203F81C63Dfa7207aeF6c23f8A09080";

export const DAPP_CONFIG = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: "https://app.zeeve.io/shared-api/eth/e90c993676be051cdae37075cdf04a03a51486a33420cb1c/",
  },
};
