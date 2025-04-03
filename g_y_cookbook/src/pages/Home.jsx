import List from "../components/List";

export function Home({ recipes }) {
  return (
    <>
      <h2
        style={{
          position: "absolute", // Allows precise positioning
          top: "120px", // Matches sidebar height
          left: "1250px", // Adjust this value based on sidebar width
          fontFamily: "cursive", // Change font
    fontSize: "2rem", // Adjust size if needed
    color: "#2c3e50", // Optional: Change text color
        }}
      >
        Recipes
      </h2>
      <List recipes={recipes} />
    </>
  );
}
