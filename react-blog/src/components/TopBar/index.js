import React from 'react';
import './TopBar.styles'

const TopBar = () => {
    return (
    <nav className="navbar navbar-expand-sm navbar-dark fixed-top navbar-custom-color px-5">
       
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
       
    </nav>

    )
}

export default TopBar
