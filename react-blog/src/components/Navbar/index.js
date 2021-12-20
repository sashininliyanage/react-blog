import React, {useContext} from 'react';
import {Link,  useNavigate} from 'react-router-dom';
import {Context} from '../context/Context'

import { Theme} from './Navbar.styles'
import noUserImg from '../../images/user.png'

const Navbar = ({scrollY}) => {
    const {user} = useContext(Context)
    const navigate = useNavigate();

    const handleUser = ()=>{
        if(user){
            sessionStorage.clear()
        }
        navigate('/login')
    }
    
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
                        <p className="nav-link m-0" style={{"cursor":"pointer"}} onClick={handleUser}>{user?"Logout":"Login"}</p>
                    </li>
                    {user &&
                    <li className="nav-item" data-bs-toggle="tooltip" data-bs-placement="bottom" title={user.username}>
                    <img className="nav-link p-0" alt="..." src={user.profilePic} onError={(e)=>{e.target.onerror = null; e.target.src=noUserImg}}/>
                    </li>
                    }
                </ul>
            </div>
       
    </Theme>

    )
}

export default Navbar
