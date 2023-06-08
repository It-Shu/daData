import React from 'react';
import './App.scss';
import Header from "./components/header/Header";
import SideBar from "./components/sidebar/SideBar";
import MobileMenu from "./components/mobileMenu/MobileMenu";
import AppRouter from "./routes/AppRouter";


function App() {
    return (
        <>
            <Header/>
            <div className="nav-container">
                <MobileMenu/>
                <SideBar/>
                <AppRouter/>
            </div>
        </>

    );
}

export default App;
