import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Home from './components/Home';
import SinglePost from './components/SinglePost'
import Write from './components/Write'
import Login from './components/Login'
import Register from './components/Register'

// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  const [user, setUser] = useState(true)
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      setScrollY(window.scrollY)
    });

  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home scrollY={scrollY} user={user}/>} />
        <Route path="/write" element={user?<Write user={user}/>:<Login/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/post/:id" element={<SinglePost user={user}/>} />
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
