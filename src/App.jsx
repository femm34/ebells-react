import "./App.css";

import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ControlPanel from "./components/ControlPanel/ControlPanel.jsx";
import Home from "./components/Home/Home.jsx";
import Login from "./components/Login/Login.jsx";
import NavbarEcommerce from "./components/NavbarEcommerce/NavbarEcommerce.jsx";
import Register from "./components/Register/Register.jsx";
import WorksSwiper from "./components/WorksSwiper/WorksSwiper.jsx";
import ServicesCarrousel from "./components/ServicesCarrousel/ServicesCarrousel.jsx";
import Map from "./components/Map/Map.jsx";

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
  {
    path: "/services",
    element: <ServicesCarrousel />,
  },
  {
    path: "/map",
    element: <Map address={"lopez mateos"} />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
