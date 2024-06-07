import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import NavBarDropdown from './NavbarDropdown';
import '../CSS/Navbar.css';

function NavBar({ scrollToTarget }) {

    const [selectedItem, setSelectedItem] = useState('');
    const [isMediumWindow, setIsMediumWindow] = useState(false);
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const anaisDawes = (isMediumWindow || isSmallWindow) ? '{AD}' : '{Anais Dawes}';

    useEffect(() => {
        function isWindowSize(size) {
            return window.innerWidth <= size;
        }

        function handleResize() {
            setIsMediumWindow(isWindowSize(860));
            setIsSmallWindow(isWindowSize(718));
        }

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(isDropdownOpen => !isDropdownOpen);
    }

    return (
        <div className='nav'>
            <div className="navbar">
                <a href='/' className='navLogo'>{anaisDawes}</a>
                {isSmallWindow ?
                    (
                        <a href="#" onClick={toggleDropdown}>
                            {isDropdownOpen ? (
                                <FontAwesomeIcon icon={faChevronUp} />
                            ) : (
                                <FontAwesomeIcon icon={faChevronDown} />
                            )}
                        </a>
                    ) :
                    (
                        <div>
                            <div className="nav-links">
                                <div className='link-container'>
                                    <a href='/projects' onClick={() => handleItemClick('projects')} className={selectedItem === 'projects' ? 'nav-link selected' : 'nav-link'}>Projects</a>
                                    {selectedItem === 'projects' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a href='/about' onClick={() => handleItemClick('about')} className={selectedItem === 'about' ? 'nav-link selected' : 'nav-link'}>About</a>
                                    {selectedItem === 'about' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a href='/contact' onClick={() => handleItemClick('contact')} className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Contact</a>
                                    {selectedItem === 'contact' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
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