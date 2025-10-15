import React, { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState([]);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

  useEffect(() => {
    fetch(`${API_URL}/api/characters`)
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error("API error:", err));
  }, [API_URL]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>WoW Vault Tracker</h1>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Runs</th>
            <th>Vault</th>
          </tr>
        </thead>
        <tbody>
          {characters.map((char) => (
            <tr key={char.name}>
              <td>{char.name}</td>
              <td>{char.runs}</td>
              <td>{char.vault}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
