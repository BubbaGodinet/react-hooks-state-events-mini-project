import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
const [taskItems, setTaskItems] = useState(TASKS)
  function handleCategoryClick (e) {
    if (e.target.className === "All") {
      setTaskItems(TASKS)
    } else if (e.target.className === "Code") {
      setTaskItems(TASKS.filter(task => task.category === e.target.className))
    } else if (e.target.className === "Food") {
      setTaskItems(TASKS.filter(task => task.category === e.target.className))
    } else if (e.target.className === "Money") {
      setTaskItems(TASKS.filter(task => task.category === e.target.className))
    } else if (e.target.className === "Misc") {
      setTaskItems(TASKS.filter(task => task.category === e.target.className))
    } 
  }
  
 function onTaskFormSubmit (task) {
  setTaskItems([task, ...taskItems])
 }


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter CATEGORIES = {CATEGORIES} handleCategoryClick = {handleCategoryClick} />
      <NewTaskForm CATEGORIES = {CATEGORIES} onTaskFormSubmit = {onTaskFormSubmit}/>
      <TaskList TASKS = {taskItems}/>
    </div>
  );
}

export default App;
