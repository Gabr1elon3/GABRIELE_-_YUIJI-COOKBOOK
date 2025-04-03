export  function About() {
    return (
        <div style={{
            position: "absolute", // Allows precise positioning
            top: "120px", // Matches sidebar height
            left: "1000px", // Adjust this value based on sidebar width
            fontFamily: "verdana", // Change font
      fontSize: "1.5rem", // Adjust size if needed
      color: "#2c3e50", // Optional: Change text color
          }}>
            <h1>About our Mini-project</h1>
            <p> This project was created with love xoxo </p>
            <h2>Team members:
                <ul>
                    <li>Gabriele</li>
                    <li>Victor</li>
                </ul>
            </h2>
        </div>
    );
}