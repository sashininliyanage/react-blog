import React from 'react';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';

// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <GlobalStyle/>
    </>
  );
}

export default App;
