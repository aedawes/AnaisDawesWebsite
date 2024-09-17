import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';
import { mdiWhiteBalanceSunny } from '@mdi/js';
import { FaMoon } from 'react-icons/fa';
import Icon from '@mdi/react';
import '../CSS/Toggle.css';

const Toggle = () => {

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div
            className={`toggle-container ${theme === 'dark' ? 'dark' : ''}`}
            onClick={toggleTheme}
        >
            <div className={`toggle-handle ${theme === 'dark' ? 'dark' : ''}`}>
                {theme === 'dark' ? (
                    <FaMoon className='icon' />
                ) : (
                    <Icon path={mdiWhiteBalanceSunny} className='icon' />
                )}
            </div>
        </div>
    );
};

export default Toggle;
