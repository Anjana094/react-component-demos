import { useState } from "react";
import "../css/Control.css"; 

function Control() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClear = (e) => {
    e.preventDefault(); // Prevent form submission
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="control-container">
      <h1>Handle Controlled Inputs</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </form>
      <div className="output-section">
        <h2>Entered Details:</h2>
        <p>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p>
          <strong>Password:</strong> {password || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {email || "N/A"}
        </p>
      </div>
    </div>
  );
}

// code fetch
export const code = `import { useState } from "react";
import "../css/Control.css"; 

function Control() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleClear = (e) => {
    e.preventDefault(); // Prevent form submission
    setName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className="control-container">
      <h1>Handle Controlled Inputs</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Enter Name"
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Enter Password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Enter Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit">Submit</button>
          <button onClick={handleClear} className="clear-button">
            Clear
          </button>
        </div>
      </form>
      <div className="output-section">
        <h2>Entered Details:</h2>
        <p>
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p>
          <strong>Password:</strong> {password || "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {email || "N/A"}
        </p>
      </div>
    </div>
  );
}
export default Control;
`;

export default Control;
