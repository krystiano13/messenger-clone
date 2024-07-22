import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./views/Home";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-800 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
