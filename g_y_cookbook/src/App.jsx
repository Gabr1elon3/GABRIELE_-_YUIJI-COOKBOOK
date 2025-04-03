import { Routes, Route } from 'react-router-dom';

import React, { use, useState } from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import { Home } from './pages/Home';
import { ItemDetails } from './pages/ItemDetails';
import { About } from './pages/About';

import "./App.css"
import RecipesJson from './recipes.json'


function App() {

  const [recipes, setRecipes] = useState(RecipesJson)


  

 
  return (
    <div className="App">

      
      <Navbar />
      
      <div className='mainDiv'>
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
        {/* Main content can go here */}
      </div>
      




      <Routes>

        <Route path="/" element={<Home recipes={recipes}/>}></Route>
        <Route path="/details/:id" element={<ItemDetails />}></Route>
        <Route path="/about" element={<About />}></Route>
      
      </Routes>

      <Footer />

      </div>
      

    </div>
  );
}

export default App;