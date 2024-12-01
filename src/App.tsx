import ConnectWalletButton from "./components/ConnectWalletButton.tsx";

const App = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-lg rounded-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Welcome to Sui Land
        </h1>
        <ConnectWalletButton />
      </div>
    </div>
  );
};

export default App;
