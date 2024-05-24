import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Navbar.css';

function NavBar({ scrollToTarget }) {

    const [selectedItem, setSelectedItem] = useState('');
    const [isMediumWindow, setIsMediumWindow] = useState(false);
    const [isSmallWindow, setIsSmallWindow] = useState(false);
    const [toggleDropdown, setToggleDropdown] = useState(false);

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
        // scrollToTarget();
    };

    const handleDropdown = (event) => {
        event.preventDefault();
        setToggleDropdown(!toggleDropdown);
    }

    return (
        <div className='nav'>
            <div className="navbar">
                <h1 className='navLogo'>{anaisDawes}</h1>
                {isSmallWindow ?
                    (
                        <a href="#" onClick={handleDropdown}>
                            {toggleDropdown ? (
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
                                    <a href="#" onClick={() => handleItemClick('projects')} className={selectedItem === 'projects' ? 'nav-link selected' : 'nav-link'}>Projects</a>
                                    {selectedItem === 'projects' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a onClick={() => handleItemClick('about')} href="#" className={selectedItem === 'about' ? 'nav-link selected' : 'nav-link'}>About</a>
                                    {selectedItem === 'about' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a onClick={() => handleItemClick('resume')} href="#" className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Resume</a>
                                    {selectedItem === 'resume' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                                <div className='link-container'>
                                    <a onClick={() => handleItemClick('contact')} href="#" className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Contact</a>
                                    {selectedItem === 'contact' && (
                                        <img src='./SquigglyLine.png' className='squiggle' alt='' />
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
            </div>
            {toggleDropdown && (
                < div className='dropdown'>
                    <a className="navItem" href='#'>
                        Projects
                    </a>
                    <a className="navItem" href='#'>
                        About
                    </a>
                    <a className="navItem" href='#'>
                        Resume
                    </a>
                    <a className="navItem" href='#'>
                        Contact
                    </a>
                </div>
            )}
        </div >
    );
}

export default NavBar;