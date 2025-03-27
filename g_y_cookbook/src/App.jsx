import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import List from './components/list';

import recipes from "./recipes.json";

function App() {

  const recetas = recipes;

 
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
        {/* Main content can go here */}
      </div>
      <Footer />


      <h2>Recipes</h2>
      <List recipes = {recetas}/>

    </div>
  );
}

export default App;
