import { useEffect, useState } from "react";
import AddTaskForm from "./addtaskform";
import TaskCard from "./taskcard";

const App = () => {
  const[ taskList, setTaskList]= useState([])
 const onSubmit=(taskData)=>{
  setTaskList((prev)=>[...prev, taskData])

 }
 const handleDelete=(id)=>{
  const updatedTaskList=taskList.filter((task)=>task.id!==id)
  setTaskList(updatedTaskList)
  }

  const handleCheckFunction=(id)=>{
     const updatedTaskList=taskList.map((task)=>{
      if( task.id===id){
        return{...task,completed:!task.completed}
      }return task
})
 setTaskList(updatedTaskList)    
}
useEffect(()=>{
  localStorage.setItem("task",JSON.stringify(taskList))
},[taskList])
  return (  
    <div className="app-container">
      <h1 className="app-title">TO-DO LIST</h1>
      <AddTaskForm onSubmit={onSubmit}/>
      {taskList.map((task)=>(
        <TaskCard task={task} handleDelete={handleDelete} handleCheck={handleCheckFunction} key={task.id}/>
        
      ))}
  </div>

  );
}
 
export default App;