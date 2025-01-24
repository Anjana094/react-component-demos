function User({ name, age }) {
    return (
      <div style={{
        border: "2px solid #ddd", 
        padding: "15px", 
        margin: "10px", 
        borderRadius: "8px", 
        backgroundColor: "#f9f9f9", 
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)"
      }}>
        <h2 style={{ fontSize: "1.5rem", color: "#333" }}>User Information</h2>
        <p style={{ fontSize: "1rem", margin: "5px 0", color: "#555" }}><strong>Name:</strong> {name}</p>
        <p style={{ fontSize: "1rem", margin: "5px 0", color: "#555" }}><strong>Age:</strong> {age}</p>
      </div>
    );
  }
  
  export default User;
  