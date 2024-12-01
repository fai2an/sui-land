import { WalletProvider } from "@mysten/wallet-adapter-react";
import { WalletStandardAdapterProvider } from "@mysten/wallet-adapter-all-wallets";

const WalletContext = ({ children }) => {
  return (
    <WalletProvider adapters={WalletStandardAdapterProvider()}>
      {children}
    </WalletProvider>
  );
};

export default WalletContext;
