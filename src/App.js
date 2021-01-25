import React, { useState } from 'react';
import Results from './Results.jsx'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import './App.css';

function App() {
  return (


    <div className="jokebox">

      <div className='header'>
        <Header />
      </div>

      <div>
        <Results />
      </div>
      <Footer/>
    </div>
  )
}

export default App;
