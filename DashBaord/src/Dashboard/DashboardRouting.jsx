import React from 'react';
import { Routes,Route } from 'react-router-dom';
import User from './User';
import Edit from './Edit';
import Menu from './Menu';
import Alluser from './Alluser';
import Dashboard from './Dashboard';


const DashboardRouting = () => {
    return (
        <>
          <Routes>
            <Route path='/' element={<Dashboard/>}>
                <Route path='/user' element={<User/>}/>
                <Route path='/edit' element={<Edit/>}/>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/alluser' element={<Alluser/>}/>
            </Route>
          </Routes>  
        </>
    );
}

export default DashboardRouting;
