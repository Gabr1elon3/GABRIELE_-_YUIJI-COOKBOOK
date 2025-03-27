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
<<<<<<< HEAD
      <Sidebar />
      <div className="content" style={{display: "flex", border: "1px solid black"}}>
        {/* Main content can go here */}
      </div>
      <Footer />


      <h2>Recipes</h2>
      <List recipes = {recetas}/>
=======
      
      <div className="content" style={{display: "flex", border:"1px solid black"}}>
        {/* Main content can go here */}
        <Sidebar />
        <div><h2>Recipes</h2>
      <ul>
        {recipesArr.map((recipe) => {

          return (
            
              (recipe.servings >= 1 )? 
              (
           
                <li>
                  <p>{recipe.name}</p>
                  <p>Calories: {recipe.calories}</p>
                  <img src= {recipe.image} width = "100px" height = "100px"/>
                  <p>Servings: {recipe.servings}</p>
                  <button>Delete recipe</button>
                </li>


              ) :

               (
                <h2>Not enough ingredients</h2>
              )
              
            
          )

         
         
        })}
      </ul></div>
        
      </div>
      <Footer />

      
>>>>>>> 62cf269a717c5b32e2feec8630dc836b1d2de983

    </div>
  );
}

export default App;
