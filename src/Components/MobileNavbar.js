import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Navbar.css';

function NavBar() {

    const [selectedItem, setSelectedItem] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
    };

    return (
        <div className='nav'>
            <div className="navbar">
                <img className="logo" src="/mainlogo.png" alt='logo' />
                <div className="nav-links">
                    <div>
                        <a onClick={() => handleItemClick('projects')} href='#' className={selectedItem === 'projects' ? 'nav-link selected' : 'nav-link'}>Projects</a>
                        {selectedItem === 'projects' && (
                            <img src='./SquigglyLine.png' className='squiggle' alt='' />
                        )}
                    </div>
                    <div>
                        <a onClick={() => handleItemClick('contact')} href="#" className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Contact</a>
                        {selectedItem === 'contact' && (
                            <img src='./SquigglyLine.png' className='squiggle' alt='' />
                        )}
                    </div>
                    <div>
                        <a onClick={() => handleItemClick('about')} href="#" className={selectedItem === 'about' ? 'nav-link selected' : 'nav-link'}>About Me</a>
                        {selectedItem === 'about' && (
                            <img src='./SquigglyLine.png' className='squiggle' alt='' />
                        )}
                    </div>
                    <div>
                        <a href="#" class="nav-link">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;