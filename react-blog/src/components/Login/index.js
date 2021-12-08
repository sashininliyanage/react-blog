import React from 'react'
import {Link} from 'react-router-dom'

// Styles
import {Wrapper, Form, Logo} from './Login.styles'

const Login = ({error}) => {
    return (
        <Wrapper>
            <Logo className="font-effect-shadow-multiple">
            Blog
            </Logo>
            <Form>
            <div className="card text-dark mb-3" style={{"minWidth":"400px"}}>
            <div className="card-header text-black py-0">
                <div style={{"display":"flex","justifyContent":"space-between","alignItems":"center"}}>
                <h4>Login</h4>
                <div>
                <Link to="/register"><p className="text-muted pt-3">Register</p></Link>
                </div>
                </div>
            </div>
            <div className="card-body">
            <form id="login">
                <small id="loginError" className="form-text .text-danger">{error}</small>
                <label  htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="loginEmail" aria-describedby="emailHelp" placeholder="Enter email" required/>
                
                <label  htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="loginPassword" placeholder="Password" required/>
                
                <input type="checkbox" className="form-check-input" id="rememberMe" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            <div style={{textAlign: 'center'}}>
            <button type="submit" className="btn">Login</button>
            </div>
            </form>
            </div>
            </div>
            
            </Form>
        </Wrapper>
    )
}

export default Login
