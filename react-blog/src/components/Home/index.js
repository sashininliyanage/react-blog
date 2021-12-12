import React, {useState, useEffect} from 'react'

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

    useEffect(()=>{
        const fetchPosts = async()=>{
            const res = await axios.get("./posts")
            setPosts(res.data)
        }

        fetchPosts()
    },[])

    return (
        <>
        <Navbar scrollY={scrollY} user={user}/>
        <Header/>
        <Wrapper>
            <Posts posts={posts}/>
            {/* <Sidebar/> */}
        </Wrapper>
        
        </>
    )
}

export default Home;