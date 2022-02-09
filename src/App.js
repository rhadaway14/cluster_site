import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import Main from './pages/main';


function App() {
  return (
    <Main/>
  );
}

export default App;
