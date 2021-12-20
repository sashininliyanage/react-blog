import React, { useContext, useRef, useEffect } from 'react'
import {Context} from '../context/Context'
import '../context/Actions'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

// Styles
import {Wrapper, Form, Logo} from './Login.styles'

const Login = () => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const {dispatch, isFetching} = useContext(Context)
    const navigate = useNavigate();

    useEffect(()=>{
        if(localStorage.getItem("rememberMe")==="true"){
            document.getElementById("rememberMe").checked = true
            document.getElementById("email").value = localStorage.getItem("email")
        }
    },[])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        dispatch({type:"LOGIN_START"})

        localStorage.setItem("rememberMe", document.getElementById("rememberMe").checked)
        if(document.getElementById("rememberMe").checked){
            localStorage.setItem("email",emailRef.current.value)
        }

        try{
            const res = await axios.post("/auth/login",{
                email: emailRef.current.value,
                password: passwordRef.current.value 
                
            })
            dispatch({type:"LOGIN_SUCCESS",payload:res.data}) 
            navigate('/');

        }catch(error){
            dispatch({type:"LOGIN_FAILURE"})
        }
        
    }

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
            <form id="login" onSubmit={handleSubmit}>
                <small id="loginError" className="form-text text-danger"></small>
                <label  htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" ref={emailRef} required autoComplete="off"/>
                
                <label  htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" placeholder="Password" ref={passwordRef} required/>
                
                <input type="checkbox" className="form-check-input" id="rememberMe"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
            <div style={{textAlign: 'center'}}>
            <button type="submit" className="btn" disabled={isFetching} >Login</button>
            </div>
            </form>
            </div>
            </div>
            
            </Form>
        </Wrapper>
    )
}

export default Login
