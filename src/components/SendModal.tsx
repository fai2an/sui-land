import React from "react";

interface SendModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (destinationAddress: string) => void;
}

const SendModal: React.FC<SendModalProps> = ({ isOpen, onClose, onSend }) => {
  const [destinationAddress, setDestinationAddress] = React.useState("");

  const handleSend = () => {
    if (destinationAddress.trim()) {
      onSend(destinationAddress);
      setDestinationAddress("");
      onClose();
    } else {
      alert("Please enter a valid destination address.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 w-80 shadow-lg">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Send Tokens
        </h3>
        <label
          htmlFor="destination"
          className="block text-sm font-medium text-gray-600 mb-2"
        >
          Destination Address
        </label>
        <input
          type="text"
          id="destination"
          value={destinationAddress}
          onChange={(e) => setDestinationAddress(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter address"
        />
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="py-2 px-4 bg-gray-500 text-white font-semibold rounded-md hover:bg-gray-700 mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            className="py-2 px-4 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendModal;
