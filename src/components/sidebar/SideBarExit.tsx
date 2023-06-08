import React from 'react';
import {NavLink} from "react-router-dom";
import {RoutesPaths} from "../../routes/routes";
import ExitIcon from "../../assets/exit.svg";
import './SideBarItems.scss'

const SideBarExit = () => {
    return (
        <li>
            <NavLink to={RoutesPaths.Exit} className="item-title">
                <img src={ExitIcon} alt="" />
                Выход
            </NavLink>
        </li>
    );
};

export default SideBarExit;
