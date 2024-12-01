import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import WalletContext from "./context/WalletContext.tsx";

ReactDOM.render(
  <React.StrictMode>
    <WalletContext>
      <App />
    </WalletContext>
  </React.StrictMode>,
  document.getElementById("root"),
);
