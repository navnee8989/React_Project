import React from 'react'
import Sidebar from '../Commancomponant/Sidebar'
import { Outlet } from 'react-router-dom'
const Dashboard = () => {
  return (
    <>
  <Sidebar />
      <div className="d-flex justify-center items-center w-full h-full">
          {/* <Outlet></Outlet> */}
      </div>
    </>
  )
}

export default Dashboard