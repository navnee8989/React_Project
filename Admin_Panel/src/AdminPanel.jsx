import React from "react";
import Header from "./Comancomponent/Header";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const AdminPanel = () => {
  return (
    <>
      <Header />
<div className="container">
        <div className="row">
                <div className="col">
                        <Link to='Pages'>Pages</Link>
                </div>
               <Outlet></Outlet>
        </div>
</div>

    </>
  );
};

export default AdminPanel;
