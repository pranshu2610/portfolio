import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import './darkmode.scss';
const DarkMode = ({isDarkMode,setIsDarkMode}) => {
    return (
        <div className='darktoggle'>
            <DarkModeToggle
                classname='darkswitch'
                onChange={setIsDarkMode}
                checked={isDarkMode}
                size={80}
            />

        </div>
    );
};
export default DarkMode;