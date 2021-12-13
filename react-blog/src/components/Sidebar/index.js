import React, {useState,useEffect} from 'react'
import axios from "axios"

import {Wrapper, Category, Container} from './Sidebar.styles'
import Post from '../Post'

const Sidebar = () => {
    const [post, setPost] = useState([]);
    const [category, setCategory] = useState([]);

    useEffect(()=>{
        const fetchPost = async()=>{
            const res = await axios.get("/posts?new=3")
            setPost(res.data)
        }

        const fetchCategory = async()=>{
            const res = await axios.get("/categories")
            setCategory(res.data)
        }
    
        fetchPost()
        fetchCategory()
    },[])

    
    return (
        <Wrapper>
            <div className="sticky">
                <h3>Categories</h3>
                <Container>
                {category.map((c,index)=>
                (<Category key={index}>{c.name}</Category>))}
                </Container>
                <h3>What's new?</h3>
                <div className="row row-cols-1 g-4">
                {post.map((p,index)=>
                (<Post post={p} key={index}/>))}
                </div>
            </div>
        </Wrapper>
    )
}

export default Sidebar
