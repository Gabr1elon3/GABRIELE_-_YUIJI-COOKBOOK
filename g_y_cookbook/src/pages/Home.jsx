import List from "../components/list"
import recipes from "../recipes.json"

export function Home (){

    const recetas = recipes;
    return(

        <>
            
      <h2>Recipes</h2>
      <List recipes = {recetas}/>
        </>
    )
}