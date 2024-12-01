import { useConnectWallet, useWallets } from "@mysten/dapp-kit";

const ConnectWalletButton = () => {
  const wallets = useWallets();
  const { mutate: connect } = useConnectWallet();

  return (
    <div style={{ padding: 20 }}>
      <ul>
        {wallets.map((wallet) => (
          <li key={wallet.name}>
            <button
              onClick={() => {
                connect(
                  { wallet },
                  {
                    onSuccess: () => console.log("connected"),
                  },
                );
              }}
            >
              Connect to {wallet.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ConnectWalletButton;
