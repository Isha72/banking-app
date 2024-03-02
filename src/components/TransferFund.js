import React, { useState } from "react";

const TransferFund = () => {
  const [data, setData] = useState({
    senderAccountNumber: "",
    receiverAccountNumber: "",
    amount: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleChange = (event, property) => {
    setData({ ...data, [property]: event.target.value });
  };

  const handleTransfer = () => {
    if (
      data.senderAccountNumber.length !== 12 ||
      !/^\d+$/.test(data.senderAccountNumber) ||
      data.receiverAccountNumber.length !== 12 ||
      !/^\d+$/.test(data.receiverAccountNumber)
    ) {
      setErrorMessage("Please enter a valid 12-digit account number.");
      return;
    }

    // Simulate a successful transfer
    console.log(
      `Transferring ${data.amount} from account: ${data.senderAccountNumber} to account ${data.receiverAccountNumber}`
    );
    setErrorMessage("");
    setShowSuccessModal(true);

    // Reset form fields
    data.senderAccountNumber = "";
    data.receiverAccountNumber = "";
    data.amount = "";
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fund Transfer</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Sender's Account Number:
          </label>
          <input
            type="text"
            id="senderAccountNumber"
            value={data.senderAccountNumber}
            onChange={(e) => handleChange(e, "senderAccountNumber")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter 12-digit account number"
            maxLength="12"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Reciever's Account Number:
          </label>
          <input
            type="text"
            id="receiverAccountNumber"
            value={data.receiverAccountNumber}
            onChange={(e) => handleChange(e, "receiverAccountNumber")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter 12-digit account number"
            maxLength="12"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            value={data.amount}
            onChange={(e) => handleChange(e, "amount")}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter amount"
          />
        </div>
        {errorMessage && (
          <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
        )}
        <button
          type="button"
          onClick={handleTransfer}
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Transfer
        </button>

        {showSuccessModal && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-md text-center">
              <p className="text-green-600 font-semibold text-2xl mb-4">
                Money transferred successfully!
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default TransferFund;
