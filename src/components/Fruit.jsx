function Fruit({ name = "Apple", color = "red" }) {
    const styles = {
      container: {
        padding: "10px 20px",
        margin: "10px auto",
        textAlign: "center",
        backgroundColor: color,
        color: "#fff",
        borderRadius: "8px",
        maxWidth: "200px",
        fontSize: "1.5rem",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
      },
    };
  
    return <div style={styles.container}>{name}</div>;
  }
  
  export default Fruit;
  