import { useState } from "react";
import Counter from "./Counter";

function RenderState() {
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleFruit = () => {
    setFruit("Banana");
    console.log(fruit);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>State in React</h1>
      <div style={styles.card}>
        <h2 style={styles.subHeading}>Current Fruit: {fruit}</h2>
        <button onClick={handleFruit} style={styles.button}>
          Change Fruit Name
        </button>
      </div>

      <div style={styles.card}>
        <h2 style={styles.subHeading}>Toggle in React JS</h2>
        <button onClick={() => setDisplay(!display)} style={styles.button}>
          {display ? "Hide" : "Show"} Counter
        </button>
        {display && <Counter />}
      </div>

      <div style={styles.card}>
        <h2 style={styles.subHeading}>Multiple Conditions in React</h2>
        <h3 style={{color:"#000"}}>Counter Value: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)} style={styles.button}>
          Increment Counter
        </button>

        <h3>{renderCondition(counter)}</h3>
      </div>
    </div>
  );
}

const renderCondition = (counter) => {
  switch (counter) {
    case 0:
      return <h4>Condition 1</h4>;
    case 1:
      return <h4>Condition 2</h4>;
    case 2:
      return <h4>Condition 3</h4>;
    case 3:
      return <h4>Condition 4</h4>;
    case 4:
      return <h4>Condition 5</h4>;
    case 5:
      return <h4>Condition 6</h4>;
    case 6:
      return <h4>Condition 7</h4>;
    default:
      return <h4>Other Condition</h4>;
  }
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subHeading: {
    fontSize: "20px",
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
};

export const code = `import { useState } from "react";
import Counter from "./Counter";

function RenderState() {
  const [fruit, setFruit] = useState("Apple");
  const [display, setDisplay] = useState(true);
  const [counter, setCounter] = useState(0);

  const handleFruit = () => {
    setFruit("Banana");
    console.log(fruit);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>State in React</h1>
      <div style={styles.card}>
        <h2 style={styles.subHeading}>Current Fruit: {fruit}</h2>
        <button onClick={handleFruit} style={styles.button}>
          Change Fruit Name
        </button>
      </div>

      <div style={styles.card}>
        <h2 style={styles.subHeading}>Toggle in React JS</h2>
        <button onClick={() => setDisplay(!display)} style={styles.button}>
          {display ? "Hide" : "Show"} Counter
        </button>
        {display && <Counter />}
      </div>

      <div style={styles.card}>
        <h2 style={styles.subHeading}>Multiple Conditions in React</h2>
        <h3 style={{color:"#000"}}>Counter Value: {counter}</h3>
        <button onClick={() => setCounter(counter + 1)} style={styles.button}>
          Increment Counter
        </button>

        <h3>{renderCondition(counter)}</h3>
      </div>
    </div>
  );
}

const renderCondition = (counter) => {
  switch (counter) {
    case 0:
      return <h4>Condition 1</h4>;
    case 1:
      return <h4>Condition 2</h4>;
    case 2:
      return <h4>Condition 3</h4>;
    case 3:
      return <h4>Condition 4</h4>;
    case 4:
      return <h4>Condition 5</h4>;
    case 5:
      return <h4>Condition 6</h4>;
    case 6:
      return <h4>Condition 7</h4>;
    default:
      return <h4>Other Condition</h4>;
  }
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "28px",
    color: "#333",
    marginBottom: "30px",
  },
  card: {
    backgroundColor: "#fff",
    padding: "15px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  subHeading: {
    fontSize: "20px",
    color: "#333",
  },
  button: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    marginTop: "10px",
    transition: "background-color 0.3s",
  },
};

export default RenderState;
`;

export default RenderState;
