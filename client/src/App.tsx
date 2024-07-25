import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Spinner } from "./components/Spinner/Spinner";

const Home = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Friends = lazy(() => import("./views/Friends"));

function App() {
  return (
    <div className="w-[100vw] h-[100vh] bg-gray-800 overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="/register"
            element={
              <Suspense fallback={<Spinner />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="/friends"
            element={
              <Suspense fallback={<Spinner />}>
                <Friends />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
