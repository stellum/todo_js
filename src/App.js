import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleInput = (e) => {
    const inputValue = e.target.value;
    // console.log(inputValue);
    setInput(inputValue);
  };

  const handleAdd = () => {
    // console.log([input, ...todoList]);

    setTodoList([...todoList, input]);
    setInput("");
  };

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <>
      <div>
        <header>
          <p className="App-title">Today</p>
          <div className="App-main">
            <input
              className="App-input"
              type="text"
              placeholder="할일을 입력하세요"
              value={input}
              onChange={handleInput}
              onKeyPress={handleOnKeyPress}
            />
            <button className="App-button" onClick={handleAdd}>
              +
            </button>
          </div>
        </header>
      </div>

      {todoList.map((value) => {
        return (
          <>
            <TodoList value={value} />
          </>
        );
      })}
    </>
  );
}

export default App;
