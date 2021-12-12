import React, {useEffect, useState } from 'react'
import { useParams} from 'react-router-dom';
import axios from 'axios';
// Components
import Navbar from '../Navbar';
import {Wrapper, Content} from './SinglePost.styles'
import Sidebar from '../Sidebar'
import img1 from '../../images/portfolio-1.jpg'

const SinglePost = ({user}) => {

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
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text"><small className="text-muted">Auther: {post.username} | Last Update: {post.updatedAt}</small></p>
                    <p className="card-text">{post.desc}</p>
                </div>
                {post.photo &&(<img src={post.photo} className="card-img-bottom" alt="..."/>)}
            </div>
            </Content>
            <Sidebar/>
        </Wrapper>
    )
}

export default SinglePost
