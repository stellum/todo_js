import React from "react";
import "../App.css";

const TodoList = ({ value }) => {
  return (
    <>
      <div className="App-body">
        <input type="checkbox" className="App-checkbox" />
        <label className="strikethrough">{value}</label>
      </div>
    </>
  );
};

export default TodoList;
