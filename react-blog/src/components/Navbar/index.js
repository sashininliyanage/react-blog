import React from 'react';
import {Link} from 'react-router-dom';

import { Theme} from './Navbar.styles'

const Navbar = ({scrollY, user}) => {
    return (
    <Theme className='navbar navbar-expand-sm navbar-dark fixed-top' opacity={scrollY}>
       
            <Link to="/" className="navbar-brand ">Blog</Link>
            <button className="navbar-toggler custom-toggler shadow-none" type='button' data-bs-toggle="collapse" data-bs-target="#navmenu">
                <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/write" className="nav-link">Write</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/login" className="nav-link">{user?"Logout":"Login"}</Link>
                    </li>
                </ul>
            </div>
       
    </Theme>

    )
}

export default Navbar
