import React from 'react';

const TransHistory = () => {
    const transactionData = [
        { serialNumber: 1, transactionId: 'TX123', accountType: 'Savings', dateTime: '2022-02-27 12:30 PM', amount: 1000.00 },
        { serialNumber: 2, transactionId: 'TX124', accountType: 'Savings', dateTime: '2022-02-27 01:45 PM', amount: 175.50 },
        { serialNumber: 3, transactionId: 'TX125', accountType: 'Credit Card', dateTime: '2022-02-27 03:15 PM', amount: -50.00 },
        { serialNumber: 4, transactionId: 'TX126', accountType: 'Savings', dateTime: '2022-02-28 10:00 AM', amount: 20200.00 },
        { serialNumber: 5, transactionId: 'TX127', accountType: 'Savings', dateTime: '2022-02-28 02:30 PM', amount: 30.75 },
      ];
      

  return (
    <div className="max-w-2xl mx-auto mt-20 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Serial Number</th>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">Account Type</th>
            <th className="border border-gray-300 p-2">Time and Date</th>
            <th className="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData.map((transaction, index) => (
            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{transaction.transactionId}</td>
              <td className="border border-gray-300 p-2">{transaction.accountType}</td>
              <td className="border border-gray-300 p-2">{transaction.dateTime}</td>
              <td className="border border-gray-300 p-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransHistory;
