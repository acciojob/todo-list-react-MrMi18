import React, { useState } from "react";

const TodoField = ({ todo, setList }) => {
  const [inputTd, setInputId] = useState(todo);
  const [isEditing, setIsEditing] = useState(false);

  const saveTodo = () => {
    setList(prev => prev.map(td => (td === todo ? inputTd : td)));
    setIsEditing(false);
  };

  const deleteTodo = () => {
    setList(prev => prev.filter(td => td !== todo));
  };

  return (
    <div className="tasks_section">
      {/* Make input disabled when not editing */}
      <input
      className="task"
        type="text"
        value={inputTd}
        onChange={(e) => setInputId(e.target.value)}
        disabled={!isEditing} // ✅ This prevents typing unless editing
      />
      <button className={isEditing?"edit":"save"} onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoField;
