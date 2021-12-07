import React from 'react'

// Components
import Navbar from '../Navbar';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Posts from '../Posts';

// Styles
import {Wrapper} from './Home.styles'

export const Home = ({scrollY}) => {
    return (
        <>
        <Navbar scrollY={scrollY}/>
        <Header/>
        <Wrapper>
            <Posts/>
            <Sidebar/>
        </Wrapper>
        
        </>
    )
}

export default Home;