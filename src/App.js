import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import Aroutes from './components/Aroutes';

function App() {
  return (
    <HashRouter >
     <Aroutes/> 
    </HashRouter>
  );
}

export default App;
