import React, {useState, useEffect, useContext} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Components
import Home from './components/Home';
import SinglePost from './components/SinglePost'
import Write from './components/Write'
import Login from './components/Login'
import Register from './components/Register'
import Edit from './components/Edit'
import {Context} from './components/context/Context'

// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  const {user} = useContext(Context)
  const [scrollY, setScrollY] = useState(window.scrollY)

  useEffect(() =>{
    window.addEventListener("scroll", ()=>{
      setScrollY(window.scrollY)
    });
  },[])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home scrollY={scrollY}/>} />
        <Route path="/posts" element={<Home scrollY={scrollY}/>} />
        <Route path="/write" element={user?<Write/>:<Login/>} />
        <Route path="/edit/:postId" element={<Edit/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path="/post/:postId" element={<SinglePost/>} />
      </Routes>
      <GlobalStyle/>
    </Router>
  );
}

export default App;
