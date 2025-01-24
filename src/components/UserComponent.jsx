function Login() {
    return (
      <div style={{
        border: "2px solid #ddd", 
        padding: "20px", 
        borderRadius: "8px", 
        backgroundColor: "#f0f0f0", 
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "15px" }}>Login User</h1>
        <input 
          type="text" 
          placeholder="Username" 
          style={{ width: "80%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} 
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          style={{ width: "80%", padding: "10px", margin: "10px 0", borderRadius: "5px", border: "1px solid #ccc" }} 
        />
        <br />
        <button 
          style={{ 
            backgroundColor: "#4CAF50", 
            color: "#fff", 
            padding: "10px 20px", 
            border: "none", 
            borderRadius: "5px", 
            cursor: "pointer" 
          }}
        >
          Login
        </button>
      </div>
    );
  }
  
  export default Login;
  
  export function Profile() {
    return (
      <div style={{
        border: "2px solid #ddd", 
        padding: "20px", 
        borderRadius: "8px", 
        backgroundColor: "#e7f7ff", 
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "300px",
        margin: "20px auto",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "1.8rem", color: "#333", marginBottom: "15px" }}>Hello User</h1>
        <p style={{ fontSize: "1.2rem", color: "#555" }}>Welcome to your profile!</p>
      </div>
    );
  }
  
  export const UserKey = "&%#^$&%^*^(^(";
