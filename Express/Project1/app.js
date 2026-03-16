const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to server...");
});
app.post("/user", (req, res) => {
  res.send("User authorized...");
});
app.put("/update", (req, res) => {
  res.send("User updated...");
});
app.delete("/delete", (req, res) => {
  res.send("User deleted...");
});

app.listen(5001, () => console.log("Server running at 5001..."));
