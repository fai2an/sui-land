import React from "react";
import QRCode from "react-qr-code";

interface ReceiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  userAddress: string;
}

const ReceiveModal: React.FC<ReceiveModalProps> = ({
  isOpen,
  onClose,
  userAddress,
}) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(userAddress);
    alert("Address copied to clipboard!");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Receive Tokens
        </h3>

        {/* QR Code */}
        <div className="flex justify-center mb-6">
          <QRCode value={userAddress} size={128} />
        </div>

        {/* Address Display */}
        <p className="text-sm font-medium text-gray-600 mb-2">Your Address</p>
        <p className="text-gray-800 font-mono text-xs bg-gray-100 p-2 rounded-md mb-6">
          {userAddress}
        </p>

        {/* Copy Button */}
        <button
          onClick={copyToClipboard}
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
        >
          Copy Address
        </button>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="w-full py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiveModal;
