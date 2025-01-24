import { createElement } from "react";

function WithoutJsx() {
  return createElement(
    "div", 
    { id: "rootDiv", style: styles.container },
    createElement(
      "h1", 
      { className: "htag", style: styles.heading },
      "Heading tag"
    ),
    createElement(
      "p",
      { style: styles.explanation },
      "This component demonstrates how to create elements without using JSX syntax. In JSX, the same code would look like: <div><h1>Heading tag</h1></div>"
    )
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '50px auto',
  },
  heading: {
    color: '#4CAF50',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  explanation: {
    color: '#555',
    fontSize: '1rem',
    marginTop: '15px',
    fontStyle: 'italic',
  }
};

export const code = `import { createElement } from "react";

function WithoutJsx() {
  return createElement(
    "div", 
    { id: "rootDiv", style: styles.container },
    createElement(
      "h1", 
      { className: "htag", style: styles.heading },
      "Heading tag"
    ),
    createElement(
      "p",
      { style: styles.explanation },
      "This component demonstrates how to create elements without using JSX syntax. 
      In JSX, the same code would look like: <div><h1>Heading tag</h1></div>"
    )
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    padding: '30px',
    textAlign: 'center',
    borderRadius: '8px',
    maxWidth: '500px',
    margin: '50px auto',
  },
  heading: {
    color: '#4CAF50',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  explanation: {
    color: '#555',
    fontSize: '1rem',
    marginTop: '15px',
    fontStyle: 'italic',
  }
};

export default WithoutJsx;
`;

export default WithoutJsx;
