import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

// Components
import Navbar from '../Navbar';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Posts from '../Posts';
import axios from "axios";

// Styles
import {Wrapper} from './Home.styles'

export const Home = ({scrollY, user}) => {
    const [posts, setPosts] = useState([]);
    const location = useLocation();

    useEffect(()=>{
        console.log(location.search)
        if(sessionStorage.getItem(`posts${location.search}`)){
            setPosts(JSON.parse(sessionStorage.getItem(`posts${location.search}`)));
            return
        }
        const fetchPosts = async()=>{
            const res = await axios.get(`/posts/${location.search}`)
            sessionStorage.setItem(`posts${location.search}`, JSON.stringify(res.data))
            setPosts(res.data)
        }

        fetchPosts()
    },[location])

    return (
        <>
        <Navbar scrollY={scrollY} user={user}/>
        <Header/>
        <Wrapper>
            <Posts posts={posts}/>
            <Sidebar/>
        </Wrapper>
        
        </>
    )
}

export default Home;