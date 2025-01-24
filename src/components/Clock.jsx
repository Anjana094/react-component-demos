import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("red");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Digital Clock</h2>
      <h1 style={{ ...styles.clock, color }}>{time}</h1>
      <div style={styles.dropdownContainer}>
        <label htmlFor="colorSelect" style={styles.label}>
          Select Clock Color:
        </label>
        <select
          id="colorSelect"
          onChange={(event) => setColor(event.target.value)}
          style={styles.select}
          defaultValue={color}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "300px",
    margin: "auto",
    backgroundColor: "#282c34",
    color: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color:"#fff"
  },
  clock: {
    fontSize: "2rem",
    background: "#000",
    padding: "15px 20px",
    borderRadius: "10px",
    display: "inline-block",
    margin: "10px 0",
    minWidth: "120px",
  },
  dropdownContainer: {
    marginTop: "15px",
  },
  label: {
    marginRight: "10px",
    fontSize: "1rem",
    color:"#fff"
  },
  select: {
    padding: "5px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
};

export const code =`import { useEffect, useState } from "react";

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [color, setColor] = useState("red");

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Digital Clock</h2>
      <h1 style={{ ...styles.clock, color }}>{time}</h1>
      <div style={styles.dropdownContainer}>
        <label htmlFor="colorSelect" style={styles.label}>
          Select Clock Color:
        </label>
        <select
          id="colorSelect"
          onChange={(event) => setColor(event.target.value)}
          style={styles.select}
          defaultValue={color}
        >
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="white">White</option>
        </select>
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    maxWidth: "300px",
    margin: "auto",
    backgroundColor: "#282c34",
    color: "white",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  title: {
    fontSize: "1.5rem",
    marginBottom: "10px",
    color:"#fff"
  },
  clock: {
    fontSize: "2rem",
    background: "#000",
    padding: "15px 20px",
    borderRadius: "10px",
    display: "inline-block",
    margin: "10px 0",
    minWidth: "120px",
  },
  dropdownContainer: {
    marginTop: "15px",
  },
  label: {
    marginRight: "10px",
    fontSize: "1rem",
    color:"#fff"
  },
  select: {
    padding: "5px",
    fontSize: "1rem",
    borderRadius: "5px",
    border: "1px solid #ccc",
    outline: "none",
  },
};

export default Clock;
`;

export default Clock;
