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
        </>
    )
}