import { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import { Spinner } from "./components/Spinner/Spinner";

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-800 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          {routes.map((item) => (
            <Route
              key={item.to}
              path={item.to}
              element={
                <Suspense fallback={<Spinner />}>{item.element}</Suspense>
              }
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
