import '../CSS/Navbar.css';

function NavBarDropdown({ isDropdownOpen, isSmallWindow }) {
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
        </div>
    );
}

export default NavBarDropdown;