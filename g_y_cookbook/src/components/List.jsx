import RecipeCard from "./RecipeCard"
import { useState } from "react"

function List ({recipes}){

 
    const [ newRecipes, setNewRecipes] = useState (recipes)

    const deleteRecipe = (id) => {
      
      const newRecipesArr = newRecipes.filter(item => item.id !== id)
      setNewRecipes(newRecipesArr)
    }
  

    return(
        <ul>
        {newRecipes.map((recipe) => {
          return (
            <RecipeCard recipe ={recipe} deleteRecipe={deleteRecipe}/> 
          )
        })}
      </ul>
    )
}

export default List