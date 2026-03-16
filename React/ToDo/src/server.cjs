const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/";

mongoose
  .connect(url)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const TodoSchema = new mongoose.Schema({
  id: Number,
  task: String,
});

const Todo = mongoose.model("Todo", TodoSchema);

app.post("/todo", async (req, res) => {
  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo); 
  } catch (err) {
    res.status(500).send("Error saving todo..." + err);
  }
});

app.get("/todo", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (err) {
    res.status(500).send("Error fetching todos");
  }
});

app.listen(5001, () => console.log("Server running at 5001..."));
