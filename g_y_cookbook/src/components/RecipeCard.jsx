
function RecipeCard ({recipe, deleteRecipe}){

    return (
        <div>
             {
                (recipe.servings >= 1 )? 
              (
                <li>
                  <p>{recipe.name}</p>
                  <p>Calories: {recipe.calories}</p>
                  <img src= {recipe.image} width = "100px" height = "100px"/>
                  <p>Servings: {recipe.servings}</p>
                  <button onClick={() => deleteRecipe(recipe.id)}>Delete recipe</button>
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