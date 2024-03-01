import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChequeOrder from "./components/ChequeOrder";
import TransferFund from "./components/TransferFund";
import TransHistory from "./components/TransHistory";
import CreateAccount from "./pages/CreateAccount";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
