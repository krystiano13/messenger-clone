import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";
import { Login } from "./views/Login";
import { Register } from "./views/Register";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-800 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
