import React, {useState,useEffect, useContext} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {Context} from '../context/Context'
import axios from 'axios'
// Components
import Navbar from '../Navbar';

// Styles
import {Wrapper} from './Edit.styles'

import noHeaderImg from '../../images/defaultheader.jpg'

export const Edit = () => {
    const publicFolder = "http://localhost:5000/images/"
    const { postId } = useParams();
    const post = JSON.parse(sessionStorage.getItem(`post${postId}`))
    
    const {user} = useContext(Context)
    const [file, setFile] = useState(post.photo)
    const [title, setTitle] = useState(post.title)
    const [desc, setDesc] = useState(post.desc)
    const [src, setSrc] = useState(publicFolder+post.photo)
    const [category, setCategory] = useState(post.category)
    const navigate = useNavigate();
    
    const handleUpdate = async(e)=>{
        e.preventDefault()
        const newPost={
            username: user.username,
            title,
            desc,
            category
        }

        if(file){
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name",filename)
            data.append("file",file)
            newPost.photo = filename
            try{
                await axios.post("/upload",data);
            }catch(err){
                console.log(err)
            }
        }

        try{
            const res = await axios.put(`/posts/${postId}`,newPost);
            sessionStorage.removeItem("posts")
            sessionStorage.removeItem(`post${postId}`)
            window.location.replace("/post/"+res.data._id)

        }catch(err){
           console.log(post.username)
           console.log(user.username)
        }
        
    }

    const handleCancle = ()=>{
        navigate(`/post/${postId}`)
    }

    return (
        <>
        <Navbar user={true}/>
        <Wrapper>
        <div className="card mb-3">
        <form onSubmit={handleUpdate}>
       
        <div className="mb-3" style={{display:"none"}}>
            <input className="form-control" type="file" id="headerImage" onChange={(e)=>{
                setFile(e.target.files[0])
                setSrc(URL.createObjectURL(e.target.files[0]))}}/>
        </div>
            <label htmlFor="headerImage" style={{width:"100%"}} > 
            <img src={src} className="card-img-bottom" alt="..." onError={(e)=>{e.target.onerror = null; e.target.src=noHeaderImg}}/>
            </label>
            <div className="card-body">
                
                <div className="mb-3">
                    <input type="text" className="form-control form-control-lg shadow-none" id="title" defaultValue={post.title} maxLength="255" required onChange={(e)=>setTitle(e.target.value)}/>
                    </div>
                <div className="mb-3">
                    <textarea className="form-control shadow-none" id="content" rows="10" required defaultValue={post.desc} onChange={(e)=>setDesc(e.target.value)}/>
                </div>
                <br/>
                <div className="input-group">
                    <select className="form-select shadow-none" id="inputGroupSelect01">
                        <option value="" >Category</option>
                        <option value="2">Other</option>
                        <option value="3">One</option>
                        <option value="4">two</option>
                        <option value="10">three</option>
                    </select>
                <button className="btn btn-outline-secondary customBtn" type="submit">Update</button>
                <button className="btn btn-outline-secondary customBtn" type="button" onClick={handleCancle}>Cancle</button>
                </div>
            </div>
            </form>
        </div>
        </Wrapper>
        </>
    )
}

export default Edit;