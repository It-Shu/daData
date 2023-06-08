import React, {useEffect, useState} from 'react';
import './SideBarItems.scss';
import SettingsIcon from "../../assets/settings.svg";
import Polygon from "../../assets/triangle.svg";
import ProfileIcon from "../../assets/profileEdit.svg";
import {NavLink} from "react-router-dom";
import {RoutesPaths} from "../../routes/routes";
import ControlIcon from "../../assets/cash-register.svg";

interface SideBarSettingsPropsType {
    isOpen?: boolean
}

const SideBarSettings: React.FC<SideBarSettingsPropsType> = (props) => {

    const [settingsOpen, setSettingsOpen] = useState(false);

    const handleSettingsClick = () => setSettingsOpen(!settingsOpen);

    useEffect(()=> {
        if (!props.isOpen) {
            setSettingsOpen(false)
        }
    }, [props.isOpen])


    return (
        <li>
            <div  onClick={handleSettingsClick} className="side-bar-item">
                <img src={SettingsIcon} alt="" />
                Настройки <img className={`polygon-icon ${settingsOpen ? 'rotated' : ''}`} src={Polygon} alt=""/>
            </div>
            {settingsOpen && (
                <ul className="settings-subItems">
                    <li className="subItem">
                        <img src={ProfileIcon} alt="" />
                        <div className="item-title">
                            <NavLink to={RoutesPaths.ProfileSettings}>Настройки <br/> профиля</NavLink>
                        </div>

                    </li>
                    <li className="subItem" >
                        <img src={ControlIcon} alt="" />
                        <div className="item-title">
                            <NavLink to={RoutesPaths.ControlFinance}>Управление <br/>  финансами</NavLink>
                        </div>

                    </li>
                </ul>
            )}
        </li>
    );
};

export default SideBarSettings;
