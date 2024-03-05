import React, { useState } from 'react';

const ChequeOrder = () => {
  const [selectedPages, setSelectedPages] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handlePagesChange = (e) => {
    setSelectedPages(e.target.value);
  };

  const applyForChequeBook = () => {
    if (selectedPages) {
      setShowSuccessModal(true);
    } else {
      alert('Please select the number of pages before applying for a Cheque Book.');
    }
  };

  const closeModal = () => {
    setShowSuccessModal(false);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow-md">
      <h2 className="text-2xl font-bold mb-4">Cheque Book Order</h2>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-gray-600">Select Pages:</label>
        <select
          value={selectedPages}
          onChange={handlePagesChange}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          required 
        >
          <option value="">Select Pages</option>
          <option value="12">12 pages</option>
          <option value="24">24 pages</option>
          <option value="36">36 pages</option>
        </select>
      </div>
      <button
        onClick={applyForChequeBook}
        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      >
        Apply for Cheque Book
      </button>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md text-center">
            <p className="text-green-600 font-semibold text-2xl mb-4">Cheque Book successfully booked!</p>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChequeOrder;
