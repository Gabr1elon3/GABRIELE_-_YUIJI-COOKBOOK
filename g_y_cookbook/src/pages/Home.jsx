import List from "../components/List"

export function Home ({recipes}) {

    return(

        <>
            
      <h2>Recipes</h2>
      <List recipes={recipes} />
        </>
    )
}