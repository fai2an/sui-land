const WalletInterface = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-lg max-w-sm mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Balance</h2>

      {/* Token Name and Balance */}
      <div className="text-center mb-6">
        <p className="text-3xl font-bold text-gray-900 mb-1">0.45</p>
        <p className="text-sm font-medium text-gray-600">Burj Khalifa</p>
      </div>

      {/* Send and Receive Buttons */}
      <div className="flex justify-between w-full">
        <button className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 mr-2">
          Receive
        </button>
        <button className="w-full py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2">
          Send
        </button>
      </div>
    </div>
  );
};

export default WalletInterface;
