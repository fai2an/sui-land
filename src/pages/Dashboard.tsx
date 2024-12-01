import WalletDashboard from "../components/WalletDashboard.tsx";
import CreateTokenForm from "../components/CreateTokenForm.tsx";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex justify-between items-center p-6 bg-white shadow-md">
        <h1 className="text-3xl font-semibold text-gray-800">
          Asset Management Dashboard
        </h1>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Disconnect
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-6">
        {/* Left side: Token Creation Form */}
        <div className="w-full md:w-1/3 md:mr-6">
          <CreateTokenForm />
        </div>

        {/* Right side: Wallet Dashboard */}
        <div className="w-full md:w-2/3">
          <WalletDashboard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
