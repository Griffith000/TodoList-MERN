const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const TodoModel = require("./Model/todo");
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

mongoose.connect("mongodb://127.0.0.1:27017/todoList");

app.get("/get", (req, res) => {
  TodoModel.find().then(
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});
app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({ task: task }).then(
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});
app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  TodoModel.findByIdAndUpdate({ _id: id }, { done: true }).then(
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});
app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  TodoModel.findByIdAndDelete({ _id: id }).then(
    (response) => {
      res.send(response);
    },
    (error) => {
      res.send(error);
    }
  );
});
