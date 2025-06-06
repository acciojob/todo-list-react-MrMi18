import React, { useState } from "react";
import './../styles/App.css';
import TodoField from "./TodoField";

const App = () => {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  const addTodoHandler = () => {
    if (todo.trim() !== "") {
      setList([...list, todo]);
      setTodo("");
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div className="add_tasks_section">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button onClick={addTodoHandler}>Add</button>
      </div>
      
        {list.length > 0 && list.map((td, index) => (
          <TodoField key={index} todo={td} setList={setList} />
        ))}
    
      
    </div>
  );
};

export default App;
