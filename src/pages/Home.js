import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [balance, setBalance] = useState(1000); 

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4 mt-4 ml-20">Welcome to SG Bank</h1>
      <div className="flex justify-around items-center mt-4">
      <div
      to="/check-balance"
      className={`card p-4 border border-gray-300 rounded-md transition-transform transform ${
        isClicked ? 'scale-105' : ''
      } cursor-pointer`}
      onClick={handleClick}
    >
      <h3 className="text-xl font-semibold mb-2">
        {isClicked ? 'Available Balance' : 'Check Balance'}
      </h3>
      {isClicked && <p>Your current balance is: {balance}</p>}
      {!isClicked && <p>View your account balance</p>}
    </div>

        <Link to="/fund-transfer" className="card">
          <h3 className="text-xl font-semibold mb-2">Fund Transfer</h3>
          <p>Transfer funds to another account</p>
        </Link>

        <Link to="/cheque-book-order" className="card">
          <h3 className="text-xl font-semibold mb-2">Cheque Book Order</h3>
          <p>Request a new cheque book</p>
        </Link>

        <Link to="/transaction-history" className="card">
          <h3 className="text-xl font-semibold mb-2">Transaction History</h3>
          <p>View your transaction history</p>
        </Link>
      </div>
    </div>
  );
};

export default Home;
