import express from "express";
import cors from "cors";
const app = express();
const PORT = 5000;

app.use(cors());
app.get("/", (req, res) => {
  res.send("WoW Vault Tracker API is running!");
});

app.get("/api/characters", (req, res) => {
  const characters = [
    { name: "Thralldor", runs: 5 },
    { name: "Lucari", runs: 2 },
    { name: "Druidboi", runs: 8 },
  ];

  const withVaultStatus = characters.map((char) => {
    let status;

    if (char.runs >= 8) status = "Max vault (3 slots)";
    else if (char.runs >= 4) status = "Medium vault (2 slots)";
    else if (char.runs >= 1) status = "Small vault (1 slot)";
    else status = "No vault rewards";

    return { ...char, vault: status };
  });

  res.json(withVaultStatus);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
