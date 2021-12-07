import React, {useState, useEffect} from 'react';

// Components
import Home from './components/Home';
import SinglePost from './components/SinglePost'
import Write from './components/Write'
import Login from './components/Login'

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
      {/* <Home scrollY={scrollY}/> */}
      {/* <SinglePost/> */}
      {/* <Write/> */}
      <Login/>
      <GlobalStyle/>
    </>
  );
}

export default App;
