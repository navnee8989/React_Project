import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Signpage from "./Signpage";
import Home from "./Home";
import Logout from "./Logout";
import CircularIndeterminate from "./Commancomponant/Loader";

const Dashboard = React.lazy(()=>import('./Dashboard/DashboardRouting'))
const App = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/home",
    element: <Home/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Login/Signpage",
    element: <Signpage/>
  },
  {
    path:"/Signpage",
    element:<Signpage/>
  },
  {
    path:"dashboard/*",
    element:<Suspense fallback={<CircularIndeterminate/>}><Dashboard/></Suspense>
  },
  {
    path: '/logout',
    element:<Logout/>
  }
]);

export default App;