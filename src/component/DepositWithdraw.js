import React, { useState } from 'react';

const Modal = ({ message, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="bg-white p-8 rounded shadow-md">
      <p className="text-green-500">{message}</p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={onClose}
      >
        Close
      </button>
    </div>
  </div>
);

const DepositWithdraw = () => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');
  const [isDepositModalOpen, setDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setWithdrawModalOpen] = useState(false);

  const handleDeposit = () => {
    if (amount === '') {
      setError('Please enter a valid amount.');
    } else {
      setError('');
      setDepositModalOpen(true);
      setAmount(''); 
    }
  };

  const handleWithdraw = () => {
    if (amount === '') {
      setError('Please enter a valid amount.');
    } else {
      setError('');
      setWithdrawModalOpen(true);
      setAmount('');
    }
  };

  const handleAmountChange = (event) => {
    const inputAmount = event.target.value;
    if (/^\d*\.?\d*$/.test(inputAmount)) {
      setAmount(inputAmount);
    }
  };

  const closeModal = () => {
    setDepositModalOpen(false);
    setWithdrawModalOpen(false);
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <label className="block mb-2 text-sm font-bold text-gray-600">Amount:</label>
      <input
        type="text"
        className="w-24 px-2 py-1 border rounded-md text-center focus:outline-none focus:ring focus:border-blue-300"
        placeholder="Enter amount"
        value={amount}
        onChange={handleAmountChange}
      />

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <div className="mt-4">
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
          onClick={handleDeposit}
        >
          Deposit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleWithdraw}
        >
          Withdraw
        </button>
      </div>

      {isDepositModalOpen && (
        <Modal message="Deposit successful" onClose={closeModal} />
      )}

      {isWithdrawModalOpen && (
        <Modal message="Withdraw successful" onClose={closeModal} />
      )}
    </div>
  );
};

export default DepositWithdraw;
