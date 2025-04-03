import { useState } from 'react';
import List from '../components/List';
import recipesData from "../recipes.json"


export default function Dashboard() {

    const [ newRecipes, setNewRecipes] = useState(recipesData)
    const deleteRecipe = (id) => {
      
        const newRecipesArr = newRecipes.filter(item => item.id !== id)
        setNewRecipes(newRecipesArr)
      }
    

    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <p>Welcome to the dashboard!</p>

            <List recipes={newRecipes} deleteRecipe={deleteRecipe} />
        </div>
    );
}