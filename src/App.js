import React from 'react';
import logo from './logo.svg';
import Idep from './Idep';
import './App.css';
import styles from './style.module.css'
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Idep/>
    </BrowserRouter>
  );
}

export default App;
