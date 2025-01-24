function Users({ data }) {
    return (
      <div style={styles.userInfo}>
        <h3 style={styles.userName}>{data.name}</h3>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Email:</strong> {data.email}</p>
      </div>
    );
  }
  
  const styles = {
    userInfo: {
      fontSize: "16px",
      color: "#333",
    },
    userName: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#2c3e50",
    },
  };
  
  export default Users;
  