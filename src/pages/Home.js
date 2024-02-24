import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to ABCD Bank</h1>
      <div className="flex justify-around items-center mt-4">
        <Link to="/check-balance" className="card">
          <h3 className="text-xl font-semibold mb-2">Check Balance</h3>
          <p>View your account balance</p>
        </Link>

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
