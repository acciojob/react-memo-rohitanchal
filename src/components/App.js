import React, { useState, useMemo } from "react";
import ReactDOM from "react-dom";
import ReactMemo from "./ReactMemo";
import UseMemo from "./UseMemo";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addNewTodo = () => {
    setTasks([...tasks, "New todo"]);
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const addCustomTask = () => {
    if (inputValue.length > 5) {
      setTasks([...tasks, inputValue]);
      setInputValue("");
    }
  };

  const memoizedTasks = useMemo(() => tasks, [tasks]);

  return (
    <div>
      <h1>React Memo Task Manager</h1>
      <button onClick={addNewTodo}>Add todo</button>
      <button onClick={incrementCounter}>Increment Counter</button>
      <p>Counter: {counter}</p>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter custom task"
      />
      <button onClick={addCustomTask}>Submit</button>
      <UseMemo tasks={memoizedTasks} />
      <ReactMemo tasks={tasks} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
