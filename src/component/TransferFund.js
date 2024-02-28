import React, { useState } from 'react';

const TransferFund = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIFSCCode] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleIFSCCodeChange = (e) => {
    setIFSCCode(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = () => {
    if (accountNumber.length !== 12 || !/^\d+$/.test(accountNumber)) {
      setErrorMessage('Please enter a valid 12-digit account number.');
      return;
    }

    if (!/^[A-Za-z]{4}\d{4}$/.test(ifscCode)) {
      setErrorMessage('Please enter a valid IFSC code in the format ABCD1234.');
      return;
    }

    const fullAccountNumber = `${ifscCode}${accountNumber}`;

    // Simulate a successful transfer
    console.log(`Transferring ${amount} to account ${fullAccountNumber} with IFSC code ${ifscCode}`);
    setErrorMessage('');
    setShowSuccessModal(true);

    // Reset form fields
    setAccountNumber('');
    setIFSCCode('');
    setAmount('');
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fund Transfer</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">IFSC Code:</label>
          <input
            type="text"
            value={ifscCode}
            onChange={handleIFSCCodeChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter IFSC code (e.g., ABCD1234)"
            maxLength="8"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Account Number:</label>
          <input
            type="text"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter 12-digit account number"
            maxLength="12"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Amount:</label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
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
      <p className="text-green-600 font-semibold text-2xl mb-4">Money transferred successfully!</p>
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
