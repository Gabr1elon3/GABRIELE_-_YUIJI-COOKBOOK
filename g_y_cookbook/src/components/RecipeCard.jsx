import { Link } from "react-router-dom";
import { ItemDetails } from "../pages/ItemDetails";


function RecipeCard ({recipe, deleteRecipe}){

    return (
        <div>
             {
                (recipe.servings >= 1 )? 
              (
                <li key={recipe.id} className="recipe-item">

                  <Link to={`/details/${recipe.id}`}  >
                  <p>{recipe.name}</p>
                  <p>Calories: {recipe.calories}</p>
                  <img src= {recipe.image} width = "100px" height = "100px"/>
                  <p>Servings: {recipe.servings}</p>

                  </Link>
                  
                  <button className="listBtn" onClick={() => deleteRecipe(recipe.id)} >Delete recipe</button>
                </li>
              ) :

              (
                <h2>Not enough ingredients</h2>
              )   
             }
        </div>
    )
}

export default RecipeCard;