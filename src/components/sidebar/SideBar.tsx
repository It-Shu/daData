import React from 'react';
import './SideBar.scss';
import SideBarList from "./SideBarList";
import SideBarSettings from "./SideBarSettings";
import SideBarExit from "./SideBarExit";

const SideBar = () => {
    return (
        <div className="sidebar">
            <span className="menu">Меню</span>
            <nav className="navbar">
                <ul>
                    <SideBarList/>
                    <SideBarSettings/>
                    <SideBarExit/>
                </ul>
            </nav>
        </div>
    );
};

export default SideBar;
