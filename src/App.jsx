import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import NavbarEcommerce from "./components/NavbarEcommerce/NavbarEcommerce.jsx";
import Register from "./components/Register/Register.jsx";
import Home from "./components/Home/Home.jsx";
import * as React from "react";
import { Button, ButtonGroup } from "@nextui-org/button";
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
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
