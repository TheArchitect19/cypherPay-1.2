import React from "react";
import { useEthers } from "@usedapp/core";

import styles from "./styles";
import { usePools } from "./hooks";
import Logo from "./assets/logo.png";
import { Exchange, Loader, WalletButton } from "./components";

const App = () => {
  const { account } = useEthers();
  // const ans=script.ans;
  const [poolsLoading, pools] = usePools();

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={Logo}
            alt="CypherPay-logo"
            className="w-16 h-16 object-contain"
          />
          {/* {ans} */}
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>CypherPay</h1>
          <p className={styles.subTitle}>We recommened you to use <span style={{color:"pink"}}>ETH</span>  Chain Now</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange} >
                {account ? (
                  poolsLoading ? (
                    <Loader title="Loading pools, please wait!" />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
