import { useWallet } from "@mysten/wallet-adapter-react";

const ConnectWalletButton = () => {
  const { wallets, select, connected, disconnect, wallet } = useWallet();

  const handleConnect = async () => {
    if (!connected) {
      await select(wallets[0].adapter);
    } else {
      disconnect();
    }
  };

  return (
    <div>
      <button onClick={handleConnect}>
        {connected ? "Disconnect Wallet" : "Connect Wallet"}
      </button>
      {connected && wallet && <p>Connected Wallet: {wallet.address}</p>}
    </div>
  );
};

export default ConnectWalletButton;
