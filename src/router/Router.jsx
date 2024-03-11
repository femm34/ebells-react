import React from "react";
import ReactDOM from "react-dom/client";
import Login from "../components/Login/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

export default router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

// import React from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Login from "../components/Login/Login";
// export default function Router() {
//   <BrowserRouter>
//     <Switch>
//       <Route path="/login" exact component={login} />
//     </Switch>
//   </BrowserRouter>;
// }
