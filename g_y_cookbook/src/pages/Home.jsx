import List from "../components/List"
import { useState } from "react"

export function Home ({recipes, addRecipe}) {

const [newRecipe, setNewRecipe] = useState({name:"", calories:"", servings:""})
console.log(newRecipe)
console.log(recipes)

    function handleChange (e){
      setNewRecipe({...newRecipe, [e.target.name]: e.target.value})
    }



    function submitHanddler (e){
    e.preventDefault()
    addRecipe(newRecipe)
    setNewRecipe({name:"", calories:"", servings:""})
    }

    return(

      <>
      <h2>Add new recipe</h2>
      <form onSubmit={submitHanddler}>

        <input
          type="text"
          name="name"
          value={newRecipe.name}
          onChange={handleChange}
          placeholder = "Name"

        />

        <input
          type="number"
          name="calories"
          value={newRecipe.calories}
          onChange={handleChange}
          placeholder = "Calories"

        />

        <input
          type="number"
          name="servings"
          value={newRecipe.servings}
          onChange={handleChange}
          placeholder = "Servings"
        />
        

        <button type="add">
          Add
        </button>
      </form> 

      <h2>Recipes</h2>
      <List recipes={recipes} />
      </>
    )
}