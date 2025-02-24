import React, { useState } from "react";
import "../App.css";

const FloatingNavbar = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle("dark-mode");
    };


    return (
        <div className="floating-navbar">
            <a href="#" className="nav-item dark-mode-icon" title="Home"><img src="/home.svg" alt=""/></a>
            <a href="https://t.me/muimuimchsya" className="nav-item dark-mode-icon" title="telegram"><img src="/tg.svg" alt=""/></a>
            <a href="https://github.com/law1om" className="nav-item dark-mode-icon" title="GitHub"><img src="/github.svg" alt=""/></a>

            <button className="theme-toggle" onClick={toggleTheme} title="Toggle Theme">
                <img
                    src={darkMode ? "/moooo.svg" : "/sun.svg"}
                    alt="Theme Icon "
                    className="theme-icon dark-mode-icon "
                />
            </button>

        </div>
    );
};

export default FloatingNavbar;
