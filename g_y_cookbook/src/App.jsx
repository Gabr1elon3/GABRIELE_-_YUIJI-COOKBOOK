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
      <Sidebar />
      <div className="content">
        {/* Main content can go here */}
      </div>
      <Footer />

      <h2>Recipes</h2>
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
      </ul>

    </div>
  );
}

export default App;
