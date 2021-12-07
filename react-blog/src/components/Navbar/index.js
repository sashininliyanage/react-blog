import React from 'react';
import { Theme} from './Navbar.styles'

const Navbar = ({scrollY}) => {
    return (
    <Theme className='navbar navbar-expand-sm navbar-dark fixed-top px-5' opacity={scrollY}>
       
            <a href="#" className="navbar-brand">Blog</a>
            <button className="navbar-toggler custom-toggler" type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a href="#section1" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#section2" className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a href="#section3" className="nav-link">Write</a>
                    </li>
                    <li className="nav-item">
                        <a href="#section3" className="nav-link">Logout</a>
                    </li>
                </ul>
            </div>
       
    </Theme>

    )
}

export default Navbar
