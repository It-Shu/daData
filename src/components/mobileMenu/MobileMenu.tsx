import React, {useState} from 'react';
import SideBarList from "../sidebar/SideBarList";
import SideBarSettings from "../sidebar/SideBarSettings";
import SideBarExit from "../sidebar/SideBarExit";
import './MobileMenu.scss'
import burgerIcon from '../../assets/burger.png'

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const hideSideBar = () => {
        setIsOpen(false)
    }


    return (

        <div className="mobile-sidebar">
            <button className="burger-button" onClick={handleToggle}>
                <img className={`burger-icon ${isOpen ? 'rotated' : ''}`} src={burgerIcon} alt=""/>
            </button>
            <div className={`${isOpen ? 'background-open' : ''}`} onClick={hideSideBar}>
                <nav className={`nav-links ${isOpen ? "show-nav" : ""}`}>
                    <ul onClick={(e) => e.stopPropagation()} >
                        <SideBarList/>
                        <SideBarSettings isOpen={isOpen}/>
                        <SideBarExit/>
                    </ul>
                </nav>
            </div>
        </div>


    );
};

export default MobileMenu;
