import { lazy } from "react";
import type { Route } from "./types/route";

const Home = lazy(() => import("./views/Home"));
const Login = lazy(() => import("./views/Login"));
const Register = lazy(() => import("./views/Register"));
const Friends = lazy(() => import("./views/Friends"));
const Friend = lazy(() => import("./views/Friend"));

export const routes: Route[] = [
  {
    element: <Home />,
    to: "/",
  },
  {
    element: <Login />,
    to: "/login",
  },
  {
    element: <Register />,
    to: "/register",
  },
  {
    element: <Friends />,
    to: "/friends",
  },
  {
    element: <Friend />,
    to: "/friend",
  },
];
