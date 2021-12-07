import React, {useState, useEffect} from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import SinglePost from './components/SinglePost'

// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      setScrollY(window.scrollY)
    },[]);

  })

  return (
    <>
      <Navbar scrollY={scrollY}/>
      {/* <Home/> */}
      <SinglePost/>
      <GlobalStyle/>
    </>
  );
}

export default App;
