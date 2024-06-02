import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";
import {
  BsCircleFill,
  BsFillTrashFill,
  BsFillCheckCircleFill,
} from "react-icons/bs";

const Home = () => {
  const [todos, setTodo] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((response) => {
        setTodo(response.data);
        console.log(todos);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleEdit = (id) => {
    axios
      .put(`http://localhost:3001/update/${id}`)
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then(() => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="home">
      <h1>Todo List</h1>
      <Create />
      {todos.length === 0 ? (
        <h3>No todos</h3>
      ) : (
        <div>
          {todos.map((todo) => (
            <div className="task" key={todo.id}>
              <div className="checkbox" onClick={() => handleEdit(todo._id)}>
                {todo.done ? (
                  <BsFillCheckCircleFill className="icon" />
                ) : (
                  <BsCircleFill className="icon" />
                )}

                <h3 className={todo.done ? "barred" : ""}>{todo.task}</h3>
              </div>
              <div>
                <BsFillTrashFill
                  className="icon"
                  onClick={() => handleDelete(todo._id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
