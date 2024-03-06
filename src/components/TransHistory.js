import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../services/account-services';

const TransHistory = ({id}) => {

  const [transactionData, setTransactionData] = useState([]);

  useEffect(() => {
    getTransactionHistory(id)
      .then(data => setTransactionData(data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div className="max-w-2xl mx-auto mt- p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Transaction History</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 p-2">Serial Number</th>
            <th className="border border-gray-300 p-2">Transaction ID</th>
            <th className="border border-gray-300 p-2">Transaction Type</th>
            <th className="border border-gray-300 p-2">Time and Date</th>
            <th className="border border-gray-300 p-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactionData?.map((transaction, index) => (
            <tr key={index} className={(index % 2 === 0) ? 'bg-gray-100' : ''}>
              <td className="border border-gray-300 p-2">{index + 1}</td>
              <td className="border border-gray-300 p-2">{transaction?.transactionId}</td>
              <td className="border border-gray-300 p-2">{transaction?.transactionType}</td>
              <td className="border border-gray-300 p-2">{transaction?.dateTime}</td>
              <td className="border border-gray-300 p-2">{transaction?.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransHistory;
