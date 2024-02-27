import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import FundTransfer from "./component/FundTransfer";

function App() {
  return (
    <div>
      <header className="App-header">
        <h1>ABCD Bank</h1>
      </header>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/fund-transfer" element={<FundTransfer />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
