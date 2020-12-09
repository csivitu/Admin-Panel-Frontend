import React from 'react'
import './Sidebar.css'
import SidebarEvents from './SidebarEvents'
function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__left">
                
            </div>
            <div className="sidebarHeader">
                <h1>Projects</h1>
            </div>
            <SidebarEvents/>
            <SidebarEvents/>
        </div>
    )
}

export default Sidebar
