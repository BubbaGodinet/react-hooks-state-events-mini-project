import React from "react";

function Task({task, category}) {

  function handleClick (e) {
    e.target.parentElement.remove()
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{task}</div>
      <button onClick = {handleClick} className="delete">X</button>
    </div>
  );
}

export default Task;
