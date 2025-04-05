import { Routes, Route } from 'react-router-dom';

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { About } from './pages/About';

import "./App.css"
import RecipesJson from './recipes.json'
import { Contact } from './pages/Contact';
import { Details } from './pages/Details';


function App() {

  const [recipes, setRecipes] = useState(RecipesJson)

   function addRecipe (recipe) {
    setRecipes([...recipes, recipe])
   }
   function deleteRecipe (id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
   }
  

 
  return (
    <div className="App">

      
      <Navbar />
      
      <div className='mainDiv'>
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
        {/* Main content can go here */}
      </div>
      




      <Routes>

        <Route path="/" element={<Home recipes={recipes} addRecipe ={addRecipe} deleteRecipe={deleteRecipe}/>}></Route>
        <Route path="/details/:id" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/details" element={<Details/>}></Route>
      
      </Routes>

      <Footer />

      </div>
      

    </div>
  );
}

export default App;