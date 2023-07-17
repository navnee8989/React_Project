import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signpage from "./Signpage";
import Home from "./Home";
import { Children } from "react";
import Dashboard from "./Dashboard";

const App = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "home",
    element: <Home/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path:"Signpage",
    element:<Signpage/>
  },
  {
    path:"/Login/Signpage",
    element:<Signpage/>
  },
  {
    path:"Login/Signpage/Login",
    element:<Login/>
  },
  {
    path:"Dashboard",
    element:<Dashboard/>
  }
]);

export default App;