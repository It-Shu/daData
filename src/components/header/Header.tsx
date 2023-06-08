import React from 'react';
import './Header.scss';
import AvatarIcon from '../../assets/profile-logo.svg'
import WrenchIcon from '../../assets/wrench.svg'

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src={WrenchIcon} alt="logo" className="logo" />
                <h1 className="logo-title">Wrench CRM</h1>
            </div>
            <div className="profile-container">
                <img src={AvatarIcon} alt="avatar" className="avatar" />
                <h2 className="logo-title">Имя Фамилия</h2>
            </div>
        </div>
    );
};

export default Header;
