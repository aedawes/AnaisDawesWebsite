import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '../CSS/Navbar.css';

function NavBar({ scrollToTarget }) {

    const [selectedItem, setSelectedItem] = useState('');

    // useEffect(() => {
    //     //set timeout to add opacity class to the squiggle
    //     setTimeout(() => {
    //         const squiggle = document.getElementsByClassName('squiggle')[0];
    //         squiggle.classList.add('opacity');
    //         console.log('hi!')
    //     }, 100);
    // }, [selectedItem]);

    const handleItemClick = (itemName) => {
        setSelectedItem(itemName);
        // scrollToTarget();
    };

    return (
        <div className='nav'>
            <div className="navbar">
                <img className="logo" src="/mainlogo.png" alt='logo' />
                <div className="nav-links">
                    {/* <div className='link-container'>
                        <a href="#" onClick={() => handleItemClick('projects')} className={selectedItem === 'projects' ? 'nav-link selected' : 'nav-link'}>Projects</a>
                        {selectedItem === 'projects' && (
                            <img src='./SquigglyLine.png' className='squiggle' alt='' />
                        )}
                    </div> */}
                    <div className='link-container'>
                        <a onClick={() => handleItemClick('contact')} href="#" className={selectedItem === 'contact' ? 'nav-link selected' : 'nav-link'}>Contact</a>
                        {selectedItem === 'contact' && (
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
                        <a href="#" class="nav-link">Resume</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavBar;