import { useState } from "react";

function RadioBxes() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("gurgaon");

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Handle Radio and Dropdown</h1>

      {/* Gender Selection */}
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Select Gender</h4>
        <div style={styles.radioGroup}>
          <label htmlFor="male" style={styles.radioLabel}>
            <input
              type="radio"
              onChange={(event) => setGender(event.target.value)}
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              style={styles.radioInput}
            />
            Male
          </label>
          <label htmlFor="female" style={styles.radioLabel}>
            <input
              type="radio"
              onChange={(event) => setGender(event.target.value)}
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              style={styles.radioInput}
            />
            Female
          </label>
        </div>
        <h2 style={styles.result}>Selected Gender: {gender}</h2>
      </div>

      {/* City Selection */}
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Select City</h4>
        <select
          value={city}
          onChange={(event) => setCity(event.target.value)}
          style={styles.select}
        >
          <option value="delhi">Delhi</option>
          <option value="noida">Noida</option>
          <option value="gurgaon">Gurgaon</option>
        </select>
        <h2 style={styles.result}>Selected City: {city}</h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    marginBottom: "10px",
  },
  radioLabel: {
    fontSize: "16px",
    color: "#555",
    display: "flex",
    alignItems: "center",
  },
  radioInput: {
    marginRight: "8px",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    backgroundColor: "#fff",
    color:"#000"
  },
  result: {
    fontSize: "18px",
    color: "#444",
  },
};

export const code =`import { useState } from "react";

function RadioBxes() {
  const [gender, setGender] = useState("female");
  const [city, setCity] = useState("gurgaon");

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Handle Radio and Dropdown</h1>

      {/* Gender Selection */}
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Select Gender</h4>
        <div style={styles.radioGroup}>
          <label htmlFor="male" style={styles.radioLabel}>
            <input
              type="radio"
              onChange={(event) => setGender(event.target.value)}
              name="gender"
              value="male"
              id="male"
              checked={gender === "male"}
              style={styles.radioInput}
            />
            Male
          </label>
          <label htmlFor="female" style={styles.radioLabel}>
            <input
              type="radio"
              onChange={(event) => setGender(event.target.value)}
              name="gender"
              value="female"
              id="female"
              checked={gender === "female"}
              style={styles.radioInput}
            />
            Female
          </label>
        </div>
        <h2 style={styles.result}>Selected Gender: {gender}</h2>
      </div>

      {/* City Selection */}
      <div style={styles.section}>
        <h4 style={styles.subHeading}>Select City</h4>
        <select
          value={city}
          onChange={(event) => setCity(event.target.value)}
          style={styles.select}
        >
          <option value="delhi">Delhi</option>
          <option value="noida">Noida</option>
          <option value="gurgaon">Gurgaon</option>
        </select>
        <h2 style={styles.result}>Selected City: {city}</h2>
      </div>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    backgroundColor: "#f4f4f9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    fontSize: "24px",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
  },
  subHeading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#333",
  },
  radioGroup: {
    display: "flex",
    gap: "20px",
    marginBottom: "10px",
  },
  radioLabel: {
    fontSize: "16px",
    color: "#555",
    display: "flex",
    alignItems: "center",
  },
  radioInput: {
    marginRight: "8px",
  },
  select: {
    padding: "8px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    width: "100%",
    backgroundColor: "#fff",
    color:"#000"
  },
  result: {
    fontSize: "18px",
    color: "#444",
  },
};

export default RadioBxes;
`;

export default RadioBxes;
