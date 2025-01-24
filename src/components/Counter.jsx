import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter: {count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={styles.button}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export const code = `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Counter: {count}</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => setCount(count + 1)} style={styles.button}>
          Increment
        </button>
        <button onClick={() => setCount(count - 1)} style={styles.button}>
          Decrement
        </button>
        <button onClick={() => setCount(0)} style={styles.button}>
          Reset
        </button>
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    maxWidth: "400px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

export default Counter;
`;

export default Counter;
