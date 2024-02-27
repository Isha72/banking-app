import React, { useState } from 'react';

const FundTransfer = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleAccountNumberChange = (e) => {
    setAccountNumber(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleTransfer = () => {
    if (accountNumber.length !== 16 || !/^\d+$/.test(accountNumber)) {
      setErrorMessage('Please enter a valid 16-digit account number.');
      return;
    }

    // You can implement the logic for transferring funds here
    console.log(`Transferring ${amount} to account ${accountNumber}`);

    // Reset input fields and error message after successful transfer
    setAccountNumber('');
    setAmount('');
    setErrorMessage('');
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Fund Transfer</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-600">Account Number:</label>
          <input
            type="text"
            value={accountNumber}
            onChange={handleAccountNumberChange}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
            placeholder="Enter 16-digit account number"
            maxLength="16"
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
      </form>
    </div>
  );
};

export default FundTransfer;
