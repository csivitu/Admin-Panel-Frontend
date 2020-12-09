import React from 'react'
import './AdminPanel.css'
import MainPage from './MainPage/MainPage'
import Sidebar from './Sidebar/Sidebar'
function AdminPanel() {
    return (
        <div className="adminPanel">
            {/* SideBar */}
            <Sidebar/>
            <MainPage/>
        </div>
    )
}

export default AdminPanel
