import RecipeCard from "./RecipeCard"


function List ({recipes, onDelete}){

 
    
    return(
      
        <ul className="recipes-container">
        {recipes.map((recipe) => (
  <RecipeCard key={recipe.id} recipe={recipe} deleteRecipe={onDelete} />
))}
      </ul>
    )
}

export default List