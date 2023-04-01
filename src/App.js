import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Aroutes from './components/Aroutes';

function App() {
  return (
    <BrowserRouter >
     <Aroutes/> 
    </BrowserRouter>
  );
}

export default App;
