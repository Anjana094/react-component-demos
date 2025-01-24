function Event() {
  const handleFruitClick = (name) => {
    alert(`You selected: ${name}`);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Event and Function Call Demo</h1>
      <p style={styles.description}>
        Click on any button below to see the fruit name displayed in an alert box.
      </p>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => handleFruitClick("Apple")}
          style={{ ...styles.button, backgroundColor: "#FF4E4E" }}
        >
          Apple
        </button>
        <button
          onClick={() => handleFruitClick("Banana")}
          style={{ ...styles.button, backgroundColor: "#FFD93D" }}
        >
          Banana
        </button>
        <button
          onClick={() => handleFruitClick("Cherry")}
          style={{ ...styles.button, backgroundColor: "#FF6384" }}
        >
          Cherry
        </button>
        <button
          onClick={() => handleFruitClick("Mango")}
          style={{ ...styles.button, backgroundColor: "#FFC107" }}
        >
          Mango
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background-color 0.3s ease",
  },
};

export const code =`function Event() {
  const handleFruitClick = (name) => {
    alert('You selected: ${name}');
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Event and Function Call Demo</h1>
      <p style={styles.description}>
        Click on any button below to see the fruit name displayed in an alert box.
      </p>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => handleFruitClick("Apple")}
          style={{ ...styles.button, backgroundColor: "#FF4E4E" }}
        >
          Apple
        </button>
        <button
          onClick={() => handleFruitClick("Banana")}
          style={{ ...styles.button, backgroundColor: "#FFD93D" }}
        >
          Banana
        </button>
        <button
          onClick={() => handleFruitClick("Cherry")}
          style={{ ...styles.button, backgroundColor: "#FF6384" }}
        >
          Cherry
        </button>
        <button
          onClick={() => handleFruitClick("Mango")}
          style={{ ...styles.button, backgroundColor: "#FFC107" }}
        >
          Mango
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "15px",
  },
  description: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "10px",
  },
  button: {
    padding: "10px 20px",
    fontSize: "1rem",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "transform 0.2s ease, background-color 0.3s ease",
  },
};

export default Event;
`;

export default Event;
