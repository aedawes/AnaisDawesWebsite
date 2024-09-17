import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import '../CSS/Navbar.css';

function NavBarDropdown({ isDropdownOpen, isSmallWindow }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`dropdown ${isDropdownOpen && isSmallWindow ? 'open' : ''}`}>
            <a className="navItem" href='/'>
                Home
            </a>
            <a className="navItem" href='/projects'>
                Projects
            </a>
            <a className="navItem" href='/about'>
                About
            </a>
            <a className="navItem" href='/contact'>
                Contact
            </a>
            <div className='navItem' onClick={toggleTheme}>
                {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
            </div>
        </div>
    );
}

export default NavBarDropdown;
