import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import WalletContext from "./context/walletContext";

ReactDOM.render(
  <React.StrictMode>
    <WalletContext>
      <App />
    </WalletContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
