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
      <textarea
  className="task"
  value={inputTd}
  onChange={(e) => setInputId(e.target.value)}
  disabled={!isEditing} // ✅ Prevent editing until clicking "Edit"
></textarea>

      <button className={isEditing ? "save" : "edit"} onClick={() => setIsEditing(!isEditing)}>
        {isEditing ? "Save" : "Edit"}
      </button>
      <button className="delete" onClick={deleteTodo}>Delete</button>
    </div>
  );
};

export default TodoField;
