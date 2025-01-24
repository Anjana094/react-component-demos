function NestingLooping() {
    const collegeData = [
      {
        collegeName: "IIT",
        website: "www.iit.com",
        students: [
          { name: "Anjana", age: 30 },
          { name: "Mrinal", age: 32 },
        ],
      },
      {
        collegeName: "IIW",
        website: "www.iiw.com",
        students: [
          { name: "Prachi", age: 20 },
          { name: "Shruti", age: 24 },
        ],
      },
    ];
  
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      margin: "20px 0",
    };
  
    const cardStyle = {
      border: "1px solid gray",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      backgroundColor: "#f8f9fa",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };
  
    const headerStyle = {
      color: "#333",
      marginBottom: "10px",
    };
  
    const studentListStyle = {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    };
  
    const studentItemStyle = {
      backgroundColor: "#e9ecef",
      margin: "5px 0",
      padding: "8px",
      borderRadius: "4px",
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Nested Data with Looping</h2>
        <div style={containerStyle}>
          {collegeData.map((college, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={headerStyle}>{college.collegeName}</h3>
              <p>
                <strong>Website:</strong> <a href={`http://${college.website}`} target="_blank" rel="noopener noreferrer">{college.website}</a>
              </p>
              <h4>Students:</h4>
              <ul style={studentListStyle}>
                {college.students.map((student, idx) => (
                  <li key={idx} style={studentItemStyle}>
                    <strong>{student.name}</strong> (Age: {student.age})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
export const code = `function NestingLooping() {
    const collegeData = [
      {
        collegeName: "IIT",
        website: "www.iit.com",
        students: [
          { name: "Anjana", age: 30 },
          { name: "Mrinal", age: 32 },
        ],
      },
      {
        collegeName: "IIW",
        website: "www.iiw.com",
        students: [
          { name: "Prachi", age: 20 },
          { name: "Shruti", age: 24 },
        ],
      },
    ];
  
    const containerStyle = {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      justifyContent: "center",
      margin: "20px 0",
    };
  
    const cardStyle = {
      border: "1px solid gray",
      borderRadius: "8px",
      padding: "15px",
      width: "250px",
      backgroundColor: "#f8f9fa",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    };
  
    const headerStyle = {
      color: "#333",
      marginBottom: "10px",
    };
  
    const studentListStyle = {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    };
  
    const studentItemStyle = {
      backgroundColor: "#e9ecef",
      margin: "5px 0",
      padding: "8px",
      borderRadius: "4px",
    };
  
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Nested Data with Looping</h2>
        <div style={containerStyle}>
          {collegeData.map((college, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={headerStyle}>{college.collegeName}</h3>
              <p>
                <strong>Website:</strong> 
                <a href={'http://$college.website'} target="_blank" rel="noopener noreferrer">
                // {college.website}</a>
              </p>
              <h4>Students:</h4>
              <ul style={studentListStyle}>
                {college.students.map((student, idx) => (
                  <li key={idx} style={studentItemStyle}>
                    <strong>{student.name}</strong> (Age: {student.age})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default NestingLooping;
  `;

  export default NestingLooping;
  