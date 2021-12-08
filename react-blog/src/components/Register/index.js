import React from 'react'
import {Link} from 'react-router-dom'

// Styles
import {Wrapper, Form, Logo} from './Register.styles'

const Register = ({error}) => {
    return (
        <Wrapper>
            <Logo className="font-effect-shadow-multiple">
            Blog
            </Logo>
            <Form>
            <div className="card text-dark mb-3" style={{"minWidth":"400px"}}>
            <div className="card-header text-black py-0">
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                <h4>Register</h4>
                <div>
                <Link to="/login"><p className="text-muted pt-3">Login</p></Link>
                </div>
                </div>
            </div>
            <div className="card-body">
            <form id="Register">

                <small id="registerError" className="form-text .text-danger">{error}</small>
                <label  htmlFor="userName">User name</label>
                <input type="password" className="form-control" id="userName" placeholder="User name" required/>

                <label  htmlFor="registerEmail">Email address</label>
                <input type="email" className="form-control" id="registerEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                
                <label  htmlFor="registerPassword">Password</label>
                <input type="password" className="form-control" id="registerPassword" placeholder="Password" required/>
                
               
            <div style={{textAlign: 'center'}}>
            <button type="submit" className="btn">Register</button>
            </div>
            </form>
            </div>
            </div>
            
            </Form>
        </Wrapper>
    )
}

export default Register
