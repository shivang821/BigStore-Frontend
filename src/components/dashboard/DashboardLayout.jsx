import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import './dashboardLayout.css'
import {Dashboard} from './Dashboard.jsx'
const DashboardLayout = () => {
    return (
        <>
            <div className="dashBoardLayout">
                <Sidebar />
                <Outlet />
                {/* <Dashboard/> */}
            </div>
        </>
    )
}

export default DashboardLayout