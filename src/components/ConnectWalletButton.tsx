import { useNavigate } from "react-router-dom";
import { useConnectWallet, useWallets } from "@mysten/dapp-kit";

const ConnectWalletButton = () => {
  const wallets = useWallets();
  const { mutate: connect } = useConnectWallet();
  const navigate = useNavigate();

  const handleConnect = (wallet) => {
    connect(
      { wallet },
      {
        onSuccess: () => {
          console.log("connected");
          navigate("/dashboard");
        },
      },
    );
  };

  return (
    <div className="space-y-4">
      <ul className="space-y-2">
        {wallets.map((wallet) => (
          <li key={wallet.name}>
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md transition duration-200"
              onClick={() => handleConnect(wallet)}
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
