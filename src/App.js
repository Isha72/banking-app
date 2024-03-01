import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ChequeOrder from "./component/ChequeOrder";
import TransferFund from "./component/TransferFund";
import TransHistory from "./component/TransHistory";
import CreateAccount from "./pages/CreateAccount";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src="https://ma-reclamation.com/wp-content/uploads/societe-generale-logo.jpg" alt="logo" className="App-logo" />
        <h1>SG Bank</h1>
      </header>
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
    </div>
  );
}

export default App;
