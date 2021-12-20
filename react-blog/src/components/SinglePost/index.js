import React, {useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
// Components
import Navbar from '../Navbar';
import {Wrapper, Content} from './SinglePost.styles'
import Sidebar from '../Sidebar'

const SinglePost = ({user}) => {

    const publicFolder = "http://localhost:5000/images/"

    const { postId } = useParams();
    const [post, setPost] = useState({});
    
    useEffect(()=>{
        const fetchPost = async()=>{
            const res = await axios.get(`/posts/${postId}`)
            setPost(res.data)
        }
        fetchPost()
    },[postId])

    return ( 
        <Wrapper>
            <Navbar user={user}/>
            <Content>
            <div className="card">
            {post.photo &&(<img src={publicFolder +post.photo} className="card-img-bottom" alt="..."/>)}
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"><small className="text-muted">Author: {post.username} | Last Update: {new Date(post.updatedAt).toDateString()}</small></p>
                    <p className="card-text">{post.desc}</p>
                </div>
            </div>
            </Content>
            <Sidebar/>
        </Wrapper>
    )
}

export default SinglePost
