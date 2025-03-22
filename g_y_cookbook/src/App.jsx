import React from 'react';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';

import recipes from "./recipes.json"

function App() {

  const recipesArr = recipes;

  console.log(recipes)
  return (
    <div className="App">
      <Navbar />
      
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

      

    </div>
  );
}

export default App;
