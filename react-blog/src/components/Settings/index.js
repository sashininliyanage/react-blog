import React, {useState, useEffect, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Context} from '../context/Context'

// Components
import Navbar from '../Navbar';
import axios from "axios";
import noUserImg from '../../images/user.png'

// Styles
import {Wrapper, Content, Buttons} from './Settings.styles'

export const Settings = () => {
    const publicFolder = "http://localhost:5000/images/"
    const navigate = useNavigate();
    const {user, dispatch} = useContext(Context)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [password, setPassword] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [photo, setPhoto] = useState(null) 
    const [src, setSrc] = useState(publicFolder+user.profilePic)
    const [error, setError] = useState("")
    
    const handleCancle = () => {
        navigate("/")
    }

    const handleUpdate = async(e)=>{
        e.preventDefault()
        dispatch({type:"UPDATE_START"})
        const updatedUser={
            userId: user._id,
            username,
            email,
            password
        }

        if(photo){
            const data = new FormData();
            let filename = user._id + photo.name;
            
            if(user.profilePic){
                filename = user.profilePic;
            }
            data.append("name",filename)
            data.append("file",photo)
            updatedUser.profilePic = filename
            try{
                await axios.post("/upload",data);
            }catch(err){
                setError(err)
                console.log(err)
            }
        }

        try{
            const res = await axios.put(`/users/${user._id}`,updatedUser);
            sessionStorage.setItem("user",JSON.stringify(res.data))
            dispatch({type:"UPDATE_SUCCESS",payload:res.data})
            setError("Profile updated successfully")
            // window.location.reload()

        }catch(err){
            setError(err)
            dispatch({type:"UPDATE_ERROR"})
        }
        
    }

    return (
        <>
        <Navbar/>
        <form onSubmit={handleUpdate}>
        <Wrapper>
        
        <Content>

        <div className="mb-3" style={{display:"none"}}>
        <input className="form-control" type="file" id="profilPic" onChange={(e)=>{
                setPhoto(e.target.files[0])
                setSrc(URL.createObjectURL(e.target.files[0]))}}/>
        </div>
        <label htmlFor="profilPic"> 
        <img className="profpic" alt="..." src={src} onError={(e)=>{e.target.onerror = null; e.target.src=noUserImg}}/>  
        </label>
        </Content>

        <Content>
            <p className="text-danger">{error}</p>
            <input type="text" className="form-control" id="username" placeholder="User name" required autoComplete="off" defaultValue={user.username} onChange={(e)=>setUsername(e.target.value)}/>
         
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required autoComplete="off" defaultValue={user.email} onChange={(e)=>setEmail(e.target.value)}/>
           
            <input type="password" id="password" className="form-control" placeholder="password" required onChange={(e)=>setPassword(e.target.value)}/>
            {/* <input type="password" id="newPassword" className="form-control" placeholder="New password" onChange={(e)=>setNewPassword(e.target.value)}/>   */}
        </Content>
        <Buttons>
            <button type="submit" className="btn">Save Changes</button>
            <button type="button" className="btn" onClick={handleCancle}>Cancle</button>
        </Buttons>
       
        </Wrapper>
        </form>
        </>
    )
}

export default Settings;