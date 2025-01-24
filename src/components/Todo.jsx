function Todo() {
    const name = "Anjanaā";
    const userObj = {
      name: "Anju",
      email: "anju@gmail.com",
      age: 30,
    };
    const userArr = ["Sam", "Peter", "Bruce"];
  
    function callFun() {
      alert("Function called!");
    }
  
    function operation(a, b, op) {
      switch (op) {
        case "+":
          return a + b;
        case "*":
          return a * b;
        default:
          return a - b;
      }
    }
  
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>User Information</h2>
          <p>
            <strong>Name:</strong> {name || "User not found"}
          </p>
          <p>
            <strong>Age:</strong> {userObj.age}
          </p>
          <p>
            <strong>Email:</strong> {userObj.email}
          </p>
        </div>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Array Element</h2>
          <p>
            <strong>Selected User:</strong> {userArr[2]}
          </p>
        </div>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Operations</h2>
          <p>
            <strong>10 * 20 =</strong> {operation(10, 20, "*")}
          </p>
        </div>
  
        <button onClick={callFun} style={styles.button}>
          Click Me
        </button>
      </div>
    );
  }
  
  // Styles for the component
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "1.8rem",
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "15px",
    },
    subTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "#555",
    },
    button: {
      display: "block",
      margin: "0 auto",
      padding: "10px 15px",
      fontSize: "1rem",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
export const code = `function Todo() {
    const name = "Anjanaā";
    const userObj = {
      name: "Anju",
      email: "anju@gmail.com",
      age: 30,
    };
    const userArr = ["Sam", "Peter", "Bruce"];
  
    function callFun() {
      alert("Function called!");
    }
  
    function operation(a, b, op) {
      switch (op) {
        case "+":
          return a + b;
        case "*":
          return a * b;
        default:
          return a - b;
      }
    }
  
    return (
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>User Information</h2>
          <p>
            <strong>Name:</strong> {name || "User not found"}
          </p>
          <p>
            <strong>Age:</strong> {userObj.age}
          </p>
          <p>
            <strong>Email:</strong> {userObj.email}
          </p>
        </div>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Array Element</h2>
          <p>
            <strong>Selected User:</strong> {userArr[2]}
          </p>
        </div>
  
        <div style={styles.section}>
          <h2 style={styles.subTitle}>Operations</h2>
          <p>
            <strong>10 * 20 =</strong> {operation(10, 20, "*")}
          </p>
        </div>
  
        <button onClick={callFun} style={styles.button}>
          Click Me
        </button>
      </div>
    );
  }
  
  // Styles for the component
  const styles = {
    container: {
      maxWidth: "400px",
      margin: "20px auto",
      padding: "20px",
      backgroundColor: "#f9f9f9",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "1.8rem",
      textAlign: "center",
      color: "#333",
      marginBottom: "20px",
    },
    section: {
      marginBottom: "15px",
    },
    subTitle: {
      fontSize: "1.2rem",
      marginBottom: "10px",
      color: "#555",
    },
    button: {
      display: "block",
      margin: "0 auto",
      padding: "10px 15px",
      fontSize: "1rem",
      backgroundColor: "#007BFF",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };
  
  export default Todo;
  `;

  export default Todo;
  