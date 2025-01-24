import { useEffect, useState } from "react";

function Effects() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [log, setLog] = useState([]);

  // Called once when the component is mounted
  useEffect(() => {
    addLog("Component mounted: callOnce function executed");
  }, []);

  // Called whenever the 'counter' state changes
  useEffect(() => {
    addLog(`Counter updated to ${counter}: counterFunction executed`);
  }, [counter]);

  // Function to add logs to the state
  const addLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>UseEffect Hook Demo</h2>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setCounter(counter + 1)}
          style={styles.button}
        >
          Increment Counter: {counter}
        </button>
        <button
          onClick={() => setData(data + 1)}
          style={styles.button}
        >
          Increment Data: {data}
        </button>
      </div>
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>Logs</h3>
        {log.length > 0 ? (
          <ul style={styles.logList}>
            {log.map((entry, index) => (
              <li key={index} style={styles.logItem}>
                {entry}
              </li>
            ))}
          </ul>
        ) : (
          <p>No logs yet.</p>
        )}
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
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
  infoBox: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  infoTitle: {
    fontSize: "1.2rem",
    color: "#444",
    marginBottom: "10px",
  },
  logList: {
    listStyleType: "none",
    padding: 0,
  },
  logItem: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "5px",
  },
};

export const code = `import { useEffect, useState } from "react";

function Effects() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(0);
  const [log, setLog] = useState([]);

  // Called once when the component is mounted
  useEffect(() => {
    addLog("Component mounted: callOnce function executed");
  }, []);

  // Called whenever the 'counter' state changes
  useEffect(() => {
    addLog('Counter updated to $counter: counterFunction executed');
  }, [counter]);

  // Function to add logs to the state
  const addLog = (message) => {
    setLog((prevLog) => [...prevLog, message]);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>UseEffect Hook Demo</h2>
      <div style={styles.buttonContainer}>
        <button
          onClick={() => setCounter(counter + 1)}
          style={styles.button}
        >
          Increment Counter: {counter}
        </button>
        <button
          onClick={() => setData(data + 1)}
          style={styles.button}
        >
          Increment Data: {data}
        </button>
      </div>
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>Logs</h3>
        {log.length > 0 ? (
          <ul style={styles.logList}>
            {log.map((entry, index) => (
              <li key={index} style={styles.logItem}>
                {entry}
              </li>
            ))}
          </ul>
        ) : (
          <p>No logs yet.</p>
        )}
      </div>
    </div>
  );
}

// Styles for the component
const styles = {
  container: {
    maxWidth: "500px",
    margin: "20px auto",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "20px",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginBottom: "20px",
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
  infoBox: {
    backgroundColor: "#fff",
    padding: "15px",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  infoTitle: {
    fontSize: "1.2rem",
    color: "#444",
    marginBottom: "10px",
  },
  logList: {
    listStyleType: "none",
    padding: 0,
  },
  logItem: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "5px",
  },
};

export default Effects;
`;

export default Effects;
