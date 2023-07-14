import Home  from "./Home";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminPanel from "./AdminPanel";
import { Suspense } from "react";
const Pages = React.lazy(()=>import("./Component/Pages/PageRouting"))
const MainRouting = createBrowserRouter([
  {
    path:"/",
    element:<Home/>
  },
  {
    path:"/Home",
    element:<Home/>
  },
  {
    path:"AdminPanel",
    element:<AdminPanel/>,
    children:[
      {
        path:"Pages/*",
        element:<Suspense fallback={<h1>Loading..</h1>}><Pages/></Suspense>,
      }
    ]
  }
])

export default MainRouting;


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Home from './Home';
// import AdminPanel from './AdminPanel';
// import PageRouting from './Component/Pages/PageRouting';

// const MainRouting = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/Home" component={Home} />
//         <Route path="/AdminPanel" component={AdminPanel} />
//         <Route path="/AdminPanel/Pages" component={PageRouting} />
//       </Switch>
//     </Router>
//   );
// };

// export default MainRouting;
