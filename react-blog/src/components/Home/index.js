import React from 'react'

// Components
import Navbar from '../Navbar';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Posts from '../Posts';

// Styles
import {Wrapper} from './Home.styles'

export const Home = ({scrollY, user}) => {
    return (
        <>
        <Navbar scrollY={scrollY} user={user}/>
        <Header/>
        <Wrapper>
            <Posts/>
            <Sidebar/>
        </Wrapper>
        
        </>
    )
}

export default Home;