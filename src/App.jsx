import "./App.css";

import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import NavbarEcommerce from "./components/NavbarEcommerce/NavbarEcommerce.jsx";
import Register from "./components/Register/Register.jsx";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {
    path: "/routes",
    element: <NavbarEcommerce />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/control-panel",
    element: <ControlPanel />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
