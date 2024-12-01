"use client";
import React, { useState } from "react";
import WalletInterface from "./WalletInterface.tsx";
import TokenList from "./TokenList.tsx";

import apartment1 from "../assets/acf-logo.png";
import apartment2 from "../assets/astar-logo.png";
import apartment3 from "../assets/signal-logo.png";

const WalletDashboard: React.FC = () => {
  const tokenLogos = {
    apartment1,
    apartment2,
    apartment3,
  };

  const [tokens, setTokens] = useState([
    {
      id: 1,
      name: "Apartment 1",
      balance: 2.5,
      logo: tokenLogos.apartment1,
    },
    {
      id: 2,
      name: "Apartment 2",
      balance: 0.8,
      logo: tokenLogos.apartment2,
    },
    {
      id: 3,
      name: "Apartment 3",
      balance: 1500,
      logo: tokenLogos.apartment3,
    },
  ]);

  const [selectedToken, setSelectedToken] = useState(tokens[0]);

  const handleSelectToken = (token: (typeof tokens)[0]) => {
    setSelectedToken(token);
  };

  const handleSend = () => {
    alert(`Send ${selectedToken.name}`);
  };

  const handleReceive = () => {
    alert(`Receive ${selectedToken.name}`);
  };

  return (
    <div className="p-6">
      {/* Wallet Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Wallet</h2>
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
          <div className="flex-1 lg:w-1/3">
            <WalletInterface
              balance={selectedToken.balance}
              tokenName={selectedToken.name}
              onSend={handleSend}
              onReceive={handleReceive}
            />
          </div>
          <div className="flex-1 lg:w-2/3">
            <TokenList tokens={tokens} onSelectToken={handleSelectToken} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;
