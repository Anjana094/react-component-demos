function Props({ children, color }) {
    const containerStyle = {
      border: "5px solid green",
      padding: "15px",
      margin: "50px auto",
      borderRadius: "8px",
      backgroundColor: "#f0f8ff",
      color: color || "#000", // Default text color is black if no color is provided
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "auto",
      maxWidth: "400px",
      textAlign: "center",
    };
  
    return <div style={containerStyle}>{children}</div>;
  }
  
  export const code =`function Props({ children, color }) {
    const containerStyle = {
      border: "5px solid green",
      padding: "15px",
      margin: "50px auto",
      borderRadius: "8px",
      backgroundColor: "#f0f8ff",
      color: color || "#000", // Default text color is black if no color is provided
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      width: "auto",
      maxWidth: "400px",
      textAlign: "center",
    };
  
    return <div style={containerStyle}>{children}</div>;
  }
  
  export default Props;
  `;

  export default Props;
  