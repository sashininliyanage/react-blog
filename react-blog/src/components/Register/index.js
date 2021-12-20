import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'

// Styles
import {Wrapper, Form, Logo} from './Register.styles'

const Register = () => {
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [error, setError] = useState("")
    const navigate = useNavigate();

    const handleSubmit= async(e)=>{
       e.preventDefault();
    
       try{
        setError("")
        await axios.post("/auth/register",{
            username,
            email,
            password
        })
        navigate('/login');

       }catch(error){
            console.log(error.response.data)
            setError(error.response.data)
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
                <h4>Register</h4>
                <div>
                <Link to="/login"><p className="text-muted pt-3">Login</p></Link>
                </div>
                </div>
            </div>
            <div className="card-body">
            <form id="Register" onSubmit={handleSubmit}>

                <p id="registerError" className="form-text text-danger p-0 m-0">{error}</p>
                <label  htmlFor="userName">User name</label>
                <input 
                type="text" 
                className="form-control" 
                id="userName" 
                placeholder="User name" 
                required
                onChange={e=>setUsername(e.target.value)}
                />

                <label  htmlFor="registerEmail">Email address</label>
                <input 
                type="email" 
                className="form-control" 
                id="registerEmail" 
                aria-describedby="emailHelp" 
                placeholder="Enter email" 
                required
                onChange={e=>setEmail(e.target.value)}
                />
                
                <label  htmlFor="registerPassword">Password</label>
                <input 
                type="password" 
                className="form-control" 
                id="registerPassword" 
                placeholder="Password" 
                required
                onChange={e=>setPassword(e.target.value)}
                />
                
               
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
