import { useState } from "react";
import "../css/CheckBoxes.css"; 

function CheckBoxes() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div className="checkbox-container">
      <h1>Handle CheckBoxes</h1>
      <fieldset>
        <legend>Select Your Skills</legend>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="php"
            value="php"
          />
          <label htmlFor="php">PHP</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="js"
            value="js"
          />
          <label htmlFor="js">JavaScript</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="react"
            value="react"
          />
          <label htmlFor="react">React</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="html"
            value="html"
          />
          <label htmlFor="html">HTML</label>
        </div>
      </fieldset>
      <h2>Selected Skills:</h2>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills selected.</p>
      )}
    </div>
  );
}

export const code =`import { useState } from "react";
import "../css/CheckBoxes.css"; 

function CheckBoxes() {
  const [skills, setSkills] = useState([]);

  const handleSkills = (event) => {
    const { value, checked } = event.target;

    if (checked) {
      setSkills([...skills, value]);
    } else {
      setSkills(skills.filter((item) => item !== value));
    }
  };

  return (
    <div className="checkbox-container">
      <h1>Handle CheckBoxes</h1>
      <fieldset>
        <legend>Select Your Skills</legend>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="php"
            value="php"
          />
          <label htmlFor="php">PHP</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="js"
            value="js"
          />
          <label htmlFor="js">JavaScript</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="react"
            value="react"
          />
          <label htmlFor="react">React</label>
        </div>
        <div className="checkbox-item">
          <input
            onChange={handleSkills}
            type="checkbox"
            id="html"
            value="html"
          />
          <label htmlFor="html">HTML</label>
        </div>
      </fieldset>
      <h2>Selected Skills:</h2>
      {skills.length > 0 ? (
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      ) : (
        <p>No skills selected.</p>
      )}
    </div>
  );
}

export default CheckBoxes;
`;

export default CheckBoxes;
