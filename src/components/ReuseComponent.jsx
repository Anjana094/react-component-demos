import Users from "./Users";

function ReuseComponent() {
  const userData = [
    {
      name: "Anjana",
      age: 30,
      email: "anjana@gmail.com",
      id: 1,
    },
    {
      name: "Mrinal",
      age: 33,
      email: "mrinal@gmail.com",
      id: 2,
    },
    {
      name: "Prachi",
      age: 28,
      email: "prachi@gmail.com",
      id: 3,
    },
    {
      name: "Shruti",
      age: 24,
      email: "shruti@gmail.com",
      id: 4,
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reuse Component in Loop</h2>
      {userData.map((user) => (
        <div key={user.id} style={styles.userCard}>
          <Users data={user} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    marginBottom: "15px",
    color: "#333",
  },
};

export const code =`import Users from "./Users";

function ReuseComponent() {
  const userData = [
    {
      name: "Anjana",
      age: 30,
      email: "anjana@gmail.com",
      id: 1,
    },
    {
      name: "Mrinal",
      age: 33,
      email: "mrinal@gmail.com",
      id: 2,
    },
    {
      name: "Prachi",
      age: 28,
      email: "prachi@gmail.com",
      id: 3,
    },
    {
      name: "Shruti",
      age: 24,
      email: "shruti@gmail.com",
      id: 4,
    },
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Reuse Component in Loop</h2>
      {userData.map((user) => (
        <div key={user.id} style={styles.userCard}>
          <Users data={user} />
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  userCard: {
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    padding: "15px",
    marginBottom: "15px",
    color: "#333",
  },
};

export default ReuseComponent;
`;

export default ReuseComponent;
