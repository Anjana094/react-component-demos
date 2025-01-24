import React from 'react';

function WithJsx() {
  const name = "Anjana";
  let x = 20;
  let y = 30;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {name}!</h1>
      <div style={styles.card}>
        <h2 style={styles.subheading}>Math Operations:</h2>
        <p style={styles.operation}>
          <strong>Sum:</strong> {x} + {y} = <span style={styles.result}>{x + y}</span>
        </p>
        <p style={styles.operation}>
          <strong>Multiplication:</strong> {x} × {y} = <span style={styles.result}>{x * y}</span>
        </p>
      </div>
      <p style={styles.note}>This is an example of JSX used to display variables and perform operations in React.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '30px auto',
  },
  heading: {
    color: '#4CAF50',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  operation: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  },
  result: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  note: {
    fontSize: '1rem',
    color: '#777',
    marginTop: '20px',
  }
};

export const code =`import React from 'react';

function WithJsx() {
  const name = "Anjana";
  let x = 20;
  let y = 30;

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome, {name}!</h1>
      <div style={styles.card}>
        <h2 style={styles.subheading}>Math Operations:</h2>
        <p style={styles.operation}>
          <strong>Sum:</strong> {x} + {y} = <span style={styles.result}>{x + y}</span>
        </p>
        <p style={styles.operation}>
          <strong>Multiplication:</strong> {x} × {y} = <span style={styles.result}>{x * y}</span>
        </p>
      </div>
      <p style={styles.note}>This is an example of JSX used to display 
      variables and perform operations in React.</p>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '30px auto',
  },
  heading: {
    color: '#4CAF50',
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  subheading: {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '10px',
  },
  operation: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '10px',
  },
  result: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  note: {
    fontSize: '1rem',
    color: '#777',
    marginTop: '20px',
  }
};

export default WithJsx;
`;

export default WithJsx;
