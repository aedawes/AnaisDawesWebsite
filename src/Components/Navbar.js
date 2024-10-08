import { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from '../ThemeContext';
import Toggle from './Toggle';
import NavBarDropdown from './NavbarDropdown';
import '../CSS/Navbar.css';

function NavBar({ page }) {

    const [isMediumWindow, setIsMediumWindow] = useState(false);
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const { theme } = useContext(ThemeContext);

    const anaisDawes = (isMediumWindow || isSmallWindow) ? '{AD}' : '{Anais Dawes}';
    const selectedItem = page;

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsMediumWindow(isWindowSize(964));
            setIsSmallWindow(isWindowSize(822));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
    }

    return (
        <div className='nav'>
            <div className="navbar">
                <a href='/' className='navLogo'>{anaisDawes}</a>
                {isSmallWindow ?
                    (
                        <button onClick={toggleDropdown}>
                            {isDropdownOpen ? (
                                <FontAwesomeIcon className='mobileMenuIcon' icon={faChevronUp} />
                            ) : (
                                <FontAwesomeIcon className='mobileMenuIcon' icon={faChevronDown} />
                            )}
                        </button>
                    ) :
                    (
                        <div>
                            <div className="nav-links">
                                <div className='link-container'>
                                    <a href='/projects' className={selectedItem === 'projects' ? 'nav-link selected' : 'nav-link'}>Projects</a>
                                    {selectedItem === 'projects' && (
                                        theme === 'light' ? (
                                            <img src='/SquigglyLine.png' className='squiggle' alt='squiggledLine' />
                                        ) : (
                                            <img src='/blueSquiggle.png' className='squiggle' alt='squiggledLine' />
                                        )
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a href='/about' className={selectedItem === 'about' ? 'nav-link selected' : 'nav-link'}>About</a>
                                    {selectedItem === 'about' && (
                                        theme === 'light' ? (
                                            <img src='/SquigglyLine.png' className='squiggle' alt='squiggledLine' />
                                        ) : (
                                            <img src='/blueSquiggle.png' className='squiggle' alt='squiggledLine' />
                                        )
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a href='/contact' className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Contact</a>
                                    {selectedItem === 'contact' && (
                                        theme === 'light' ? (
                                            <img src='/SquigglyLine.png' className='squiggle' alt='squiggledLine' />
                                        ) : (
                                            <img src='/blueSquiggle.png' className='squiggle' alt='squiggledLine' />
                                        )
                                    )}
                                </div>
                                <div className='link-container'>
                                    <Toggle />
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            <NavBarDropdown isDropdownOpen={isDropdownOpen} isSmallWindow={isSmallWindow} />
        </div >
    );
}

export default NavBar;