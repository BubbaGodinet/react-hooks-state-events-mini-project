import React,{ useState } from "react";

function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {

  const changeCategory = CATEGORIES.map(category => category === "All" ? null : <option>{category}</option>)

  const [taskData, setTaskData] = useState ({
    text: "",
    category: "",
  })


  function handleSubmit(e) {
      e.preventDefault()
      onTaskFormSubmit(taskData)
  }

  function handleChange(e) {
    console.log(e.target.value)
    console.log(e.target.name)
    setTaskData({...taskData, [e.target.name]:e.target.value})
  }
 

  return (
    <form onSubmit = {handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange = {handleChange} type="text" name="text" value = {taskData.text}/>
      </label>
      <label>
        Category
        <select onChange = {handleChange} name="category" value = {taskData.category}>
          {changeCategory}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
