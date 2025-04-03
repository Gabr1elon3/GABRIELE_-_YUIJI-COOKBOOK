import { useParams, Link } from "react-router-dom"
import recipes from "../recipes.json"

export function ItemDetails (){

    console.log(recipes)
    const { id } = useParams();
    const recipeDetails = recipes.find((item) => item.id === (id));

    if (!recipeDetails) {
        return <h2>Producto no encontrado</h2>;
    }

    return(

        <>
            <h2>{recipeDetails.name}</h2>
            <p>Calories: {recipeDetails.calories}</p>
            <img src= {recipeDetails.image} width = "100px" height = "100px"/>
            <p>Servings: {recipeDetails.servings}</p>

            <button>Update</button>
        </>
    )
}