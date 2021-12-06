import React from 'react'

// Components
import Header from '../Header';
import Sidebar from '../Sidebar';
import Posts from '../Posts';

// Styles
import {Wrapper} from './Home.styles'

export const Home = () => {
    return (
        <>
        <Header/>
        <Wrapper>
            <Posts/>
            <Sidebar/>
        </Wrapper>
        
        </>
    )
}

export default Home;