function Loop() {
    const userData = [
      { name: "Anjana", age: 30, email: "anjana@gmail.com", id: 1 },
      { name: "Mrinal", age: 33, email: "mrinal@gmail.com", id: 2 },
      { name: "Prachi", age: 28, email: "prachi@gmail.com", id: 3 },
      { name: "Shruti", age: 24, email: "shruti@gmail.com", id: 4 },
    ];
  
    const tableStyle = {
      borderCollapse: "collapse",
      width: "80%",
      margin: "20px auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
  
    const thStyle = {
      background: "#4CAF50",
      color: "#fff",
      padding: "12px 15px",
      textAlign: "left",
    };
  
    const tdStyle = {
      padding: "10px 15px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
      color:"#000"
    };
  
    const trHoverStyle = {
      ":hover": {
        background: "#f1f1f1",
      },
    };
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Handle Loop in JSX</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Age</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} style={trHoverStyle}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
export const code =`function Loop() {
    const userData = [
      { name: "Anjana", age: 30, email: "anjana@gmail.com", id: 1 },
      { name: "Mrinal", age: 33, email: "mrinal@gmail.com", id: 2 },
      { name: "Prachi", age: 28, email: "prachi@gmail.com", id: 3 },
      { name: "Shruti", age: 24, email: "shruti@gmail.com", id: 4 },
    ];
  
    const tableStyle = {
      borderCollapse: "collapse",
      width: "80%",
      margin: "20px auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    };
  
    const thStyle = {
      background: "#4CAF50",
      color: "#fff",
      padding: "12px 15px",
      textAlign: "left",
    };
  
    const tdStyle = {
      padding: "10px 15px",
      textAlign: "left",
      borderBottom: "1px solid #ddd",
      color:"#000"
    };
  
    const trHoverStyle = {
      ":hover": {
        background: "#f1f1f1",
      },
    };
  
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Handle Loop in JSX</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>ID</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Email</th>
              <th style={thStyle}>Age</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id} style={trHoverStyle}>
                <td style={tdStyle}>{user.id}</td>
                <td style={tdStyle}>{user.name}</td>
                <td style={tdStyle}>{user.email}</td>
                <td style={tdStyle}>{user.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Loop;
  `;

export default Loop;
  