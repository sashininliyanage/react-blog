import React, {useState, useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Context} from '../context/Context'
import axios from 'axios'
// Components
import Navbar from '../Navbar';

// Styles
import {Wrapper} from './Write.styles'

import noHeaderImg from '../../images/defaultheader.jpg'

export const Write = () => {
    const {user} = useContext(Context)
    const [file, setFile] = useState("")
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [category, setCategory] = useState(["other"])
    const navigate = useNavigate();


    const handleSubmit = async(e)=>{
        e.preventDefault()
        const newPost={
            username: user.username,
            title,
            desc,
            category
        }

        if(file !==""){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename
            try{
                await axios.post("/upload",data);
            }catch(err){}
        }

        try{
            const res = await axios.post("/posts",newPost);
            sessionStorage.removeItem("posts")
            window.location.replace("/post/"+res.data._id)

        }catch(err){}
        
    }

    const handleCancle = ()=>{
        navigate('/')
    }

    return (
        <>
        <Navbar user={true}/>
        <Wrapper>
        <div className="card mb-3">
        <form onSubmit={handleSubmit}>
       
        <div className="mb-3" style={{display:"none"}}>
            <input className="form-control" type="file" id="headerImage" onChange={(e)=>setFile(e.target.files[0])}/>
        </div>
            <label htmlFor="headerImage" style={{width:"100%"}} > 
             
        <img src={file && URL.createObjectURL(file)} className="card-img-top header" alt="..." onError={(e)=>{e.target.onerror = null; e.target.src=noHeaderImg}}/>
            </label>
            <div className="card-body">
                
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg shadow-none" id="title" placeholder="Write a meaningful, unique, short name" maxLength="255" required onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                <div className="mb-3">
                    <textarea className="form-control shadow-none" id="content" rows="10" required placeholder="Write content here..." onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <br/>
                <div className="input-group">
                    <select className="form-select shadow-none" id="inputGroupSelect01" required >
                        <option value="" >Category</option>
                        <option value="2">Other</option>
                        <option value="3">One</option>
                        <option value="4">two</option>
                        <option value="10">three</option>
                    </select>
                <button className="btn btn-outline-secondary customBtn" type="submit">Post</button>
                <button className="btn btn-outline-secondary customBtn" type="button" onClick={handleCancle}>Cancle</button>
                </div>
            </div>
            </form>
        </div>
        </Wrapper>
        </>
    )
}

export default Write;