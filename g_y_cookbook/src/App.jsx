import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import List from './components/List';
import { Routes, Route } from 'react-router-dom';
import ItemDetails from './pages/ItemDetails';
import Dashboard from './pages/dashboard';
// import List from './components/List';  

import NotFound from './pages/NotFound';
import About from './pages/About';

import recipes from "./recipes.json";

function App() {

  const recetas = recipes;

 
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
       
        <main>
          <Routes>
            <Route path="/" element={<Dashboard recipes={recetas} />} />
            <Route path="/about" element={<About />} />
            <Route path="/recipes/:id" element={<ItemDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
      <Footer />


      <h2>Recipes</h2>
      <List recipes = {recetas}/>

    </div>
  );
}

export default App;
