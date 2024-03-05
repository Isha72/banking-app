import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChequeOrder from "./components/ChequeOrder";
import TransferFund from "./components/TransferFund";
import TransHistory from "./components/TransHistory";
import CreateAccount from "./pages/CreateAccount";
import AdminDashboard from "./pages/AdminDashboard";
import ChequeBookStatus from "./pages/ChequeBookStatus";
import DepositWithdraw from "./component/DepositWithdraw";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/fund-transfer" element={<TransferFund />} />
        <Route path="/cheque-book-order" element={<ChequeOrder />} />
        <Route path="/transaction-history" element={<TransHistory />} />      
        <Route path="/admin-dashboard" element={<AdminDashboard />} />   
        <Route path="/chequebook-Status/:customerId" element={<ChequeBookStatus />} />
        <Route path="/deposit-withdraw" element={<DepositWithdraw />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
