import React from 'react';
import {SidebarData} from "../SideBarData";
import {NavLink} from "react-router-dom";
import './SideBarItems.scss';


const SideBarList = () => {
    return (
        <>
            {SidebarData.map((item, index) => {
                return <li key={index} className="side-bar-item">
                    <NavLink to={item.path} className="item-title">
                        <img src={item.icon} alt=""/>
                        {item.title}
                    </NavLink>
                </li>
            }) }
        </>
    );
};

export default SideBarList;
