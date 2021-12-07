import React from 'react'

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
            <div className="card-header text-white"><h4>Login</h4></div>
            <div className="card-body">
            <form id="login">
                <small id="emailHelp" className="form-text .text-danger">{error}</small>
                <label className="text-white" htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" style={{ "backgroundColor" : "#d1d1d1" }}/>
                
                <label className="text-white" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" style={{ "backgroundColor" : "#d1d1d1" }}/>
                
                <input type="checkbox" className="form-check-input" id="exampleCheck1" style={{ "backgroundColor" : "#d1d1d1" }}/>
                <label className="form-check-label text-white" htmlFor="exampleCheck1">Remember me</label>
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