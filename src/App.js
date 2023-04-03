import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Aroutes from './components/Aroutes';
import Footer from './structures/footer';
import Layout from './components/layout';

function App() {
  return (
    <HashRouter >
      <div className='pagelayout'>
        <div className='contentwrap'>
      <Layout/>
     <Aroutes/> 
     <Footer/>
     </div>
     </div>
    </HashRouter>
  );
}

export default App;
