import logo from './logo.svg';
import './App.css';
import React, { useState,useEffect } from 'react';
import {Route ,Routes} from "react-router-dom";
import Home from "./components/Home/Home"
import Quiz from "./components/Quiz/Quiz"

function App() {

  return (<>
    <Routes>
      <Route path="/quiz" element={<Quiz/>}/>
      <Route path='/' element={<Home/>} />
    </Routes>

    </>
  );
}

export default App;
