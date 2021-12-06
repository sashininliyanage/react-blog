import React from 'react';

// Components
import TopBar from './components/TopBar';
import Header from './components/Header';
import Home from './components/Home';

// Styles
import {GlobalStyle} from './GlobalStyle';


function App() {
  return (
    <>
      <TopBar/>
      <Header/>
      <Home/>
      <GlobalStyle/>
    </>
  );
}

export default App;
