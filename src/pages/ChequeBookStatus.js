import React, { useState } from 'react';

const ChequeBookStatus = () => {
  const [status, setStatus] = useState('Pending');

  const handleAccept = () => {
    setStatus('Accepted');
  };

  const handleReject = () => {
    setStatus('Rejected');
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div className="p-4 bg-gray-200 rounded-md shadow-md text-center">
        <p className="text-xl font-semibold mb-4">ChequeBookStatus: {status}</p>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
          onClick={handleAccept}
        >
          Accept
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md"
          onClick={handleReject}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ChequeBookStatus;
