import React from 'react';
import {  Route, Routes } from 'react-router-dom';

import Admin from "./../Pages/Admin"
import User from "./../Pages/User"
import Login from "./../Pages/Login"
import PageMenu from "./PageMenu"

const PageRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<PageMenu />}>
          <Route path="Admin" element={<Admin />} />
          <Route path="User" element={<User />} />
          <Route path="Login" element={<Login />} />
        </Route>
      </Routes>
   
    </>
  );
};

export default PageRouting;
