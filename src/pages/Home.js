import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { getAccount } from "../services/account-services";

const Home = ({id}) => {
  const [isClicked, setIsClicked] = useState(false);

  const [showBalance, setShowBalance] = useState(false);
  const [balance, setBalance] = useState(0);


  const [isBalanceVisible, setIsBalanceVisible] = useState(false);

  // const handleCheckBalance = async () => {
  //   try {
  //     const data = await getAccount(id);
  //     setBalance(data.balance); // assuming balance is a field in the returned object
  //     setShowBalance(true);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleClick = async () => {
    // Fetch balance here if needed 

    try {
      const data = await getAccount(id);
      setBalance(data.balance); // assuming balance is a field in the returned object
      setShowBalance(true);
    } catch (error) {
      console.error(error);
    }

    setIsBalanceVisible(!isBalanceVisible);
  };

  
  return (
    <div>
<Navbar />
      <div className="flex justify-around items-center mt-4">
        <div
          to="/check-balance"
          className={`card p-4 border border-gray-300 rounded-md transition-transform transform ${
            isClicked ? "scale-105" : ""
          } cursor-pointer`}
          onClick={handleClick}
        >
        <h3 className="text-xl font-semibold mb-2">
          {isBalanceVisible ? "Available Balance" : "Check Balance"}
        </h3>
        {isBalanceVisible && <p>Your current balance is: {balance}</p>}
        {!isBalanceVisible && <p>View your account balance</p>}
        </div>

        <Link to="/fund-transfer" className=" bg-gray-200 p-4 rounded-md">
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
