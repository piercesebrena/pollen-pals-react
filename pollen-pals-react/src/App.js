// import './App.css';
// import Header from "./components/Header";
import React from "react";
import React, {useState} from "react";
import {Routes,Route} from "react-router-dom";
import Header from "./shared/Header";
import About from "./components/About";
import Home from "./components/Home";
import Allersense from "./components/Allersense";
import Contact from "./components/Contact";
import Hub from "./components/Hub";
import Profile from "./components/Profile";
import Footer from "./shared/Footer";







function App() {
  return (
    <div> className="App"
      {/* <Header/> */}
      <About/>
      <Home/>
      
      
    </div>
  );
}

export default App;
