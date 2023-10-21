import React from "react";
import ReactDOM from "react-dom";
import { DAppProvider } from "@usedapp/core";
import { BrowserRouter } from 'react-router-dom'
import App from "./App";
import Home from "./Home"
import { DAPP_CONFIG } from "./config";
import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <DAppProvider config={DAPP_CONFIG}>
      <Home />
    </DAppProvider>
  </BrowserRouter>,
  document.getElementById("root")
);