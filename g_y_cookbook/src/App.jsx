import { Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import  About  from './pages/About';
import Dashboard from './pages/dashboard';
import "./App.css"

import recipesData from "./recipes.json"


function App() {
 
  return (
    <div className="App">

      
      <Navbar />
      
      <div className='mainDiv'>
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
        {/* Main content can go here */}
      </div>
      




      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/details/:id" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
      
      </Routes>

      <Footer />

      </div>
      

    </div>
  );
}

export default App;
