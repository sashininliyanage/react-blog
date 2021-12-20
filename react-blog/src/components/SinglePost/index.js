import React, {useEffect, useState, useContext } from 'react'
import { Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
// Components
import Navbar from '../Navbar';
import {Wrapper, Content, Icons} from './SinglePost.styles'
import Sidebar from '../Sidebar'
import {Context} from '../context/Context'

const SinglePost = () => {

    const publicFolder = "http://localhost:5000/images/"
    const {user} = useContext(Context)
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const Navigate = useNavigate()
    useEffect(()=>{
        const savedPost =  sessionStorage.getItem(`post${postId}`)
        if(savedPost){
            setPost(JSON.parse(savedPost))
        }else{
            const fetchPost = async()=>{
                const res = await axios.get(`/posts/${postId}`)
                setPost(res.data)
                sessionStorage.setItem(`post${postId}`, JSON.stringify(res.data))
            }
            fetchPost()
           
        }
        
    },[postId])

    const handleDelete = async(e)=>{
        e.preventDefault();
        try{
            await axios.delete(`/posts/${post._id}`,{
                data: {username: user.username}
            })
            sessionStorage.removeItem("posts")
            sessionStorage.removeItem(`post${post._id}`)
            Navigate('/')
        }catch(err){

        }
    }

    return ( 
        <Wrapper>
            <Navbar/>
            <Content>
            <div className="card">
            {post.username === user?.username &&
            <Icons>
                <Link to={`/edit/${post._id}`}><i className="bi bi-pencil-square"></i></Link>
                <i className="bi bi-trash" data-bs-toggle="modal" data-bs-target="#deleteConfirm"></i>
            </Icons>}
            {post.photo &&(<img src={publicFolder +post.photo} className="card-img-bottom" alt="..."/>)}
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"><small className="text-muted">Author: {post.username} | Last Update: {new Date(post.updatedAt).toDateString()}</small></p>
                    <p className="card-text">{post.desc}</p>
                </div>  
            </div>
            </Content>
            <Sidebar/>

            <div className="modal fade" id="deleteConfirm" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                <div className="modal-body">
                    Do you want to delete <span style={{"fontWeight": "bold"}}>"{post.title}"</span> permenantly?
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-danger" onClick={handleDelete}>Yes</button>
                    <button type="button" className="btn" style={{"background":"var(--darkColor)", "color": "white"}} data-bs-dismiss="modal">No</button>
                </div>
                </div>
            </div>
            </div>
        </Wrapper>
    )
}

export default SinglePost
