
import Home from './Components/Home/Home';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Nav from './Components/Nav/Nav';
import React from 'react';

function App() {
  return (
      <div className="App">
      <Nav />
          <Routes>
            <Route exact path="/" component={Home} />
          </Routes>
      </div>
  );
}

export default App;
