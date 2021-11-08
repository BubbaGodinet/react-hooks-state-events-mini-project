import React from "react";
import Task from './Task'

function TaskList({TASKS}) {

  const tasks = TASKS.map(task => <Task key = {task.text} task = {task.text} category = {task.category}/>)

  return (
    <div className="tasks">
      {tasks}
    </div>
  );
}

export default TaskList;
