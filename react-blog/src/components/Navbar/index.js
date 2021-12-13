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
                    <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
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
