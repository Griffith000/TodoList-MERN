import React, { useState } from "react";
import axios from "axios";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", {
        task: task,
      })
      .then(
        () => {
          location.reload();
        },
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="creation">
      <input
        type="text"
        className="create-form-input"
        onChange={(e) => setTask(e.target.value)}
        name=""
        id=""
      />
      <button className="button-create-form" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
};

export default Create;
