
import { useState } from "react";


const AddTaskForm = ({onSubmit}) => {
 const[taskValue,setTaskValue]=useState({
    title:"",
    dueDate:"",
    priorityDropdown:"",
    completed:false
})
const handleChange=(e)=>{
    const {name, value}=e.target
    setTaskValue(prev=>({
        ...prev,[name]:value
    }))
}
 const handleSubmit=(e)=>{
 e.preventDefault()
 let title=taskValue.title
 let dueDate=taskValue.dueDate
 
 if (taskValue.title.toLowerCase().includes("tomorrow")){
 const tomorrow= new Date()
 tomorrow.setDate(tomorrow.getDate()+ 1)
  dueDate=tomorrow
  title=title.replace("tomorrow","").trim()
 }
 if(taskValue.title.toLowerCase().includes("today")){
    const today=new Date()
    dueDate=today
    title=title.replace("today","").trim()
 }

 if(taskValue.title.toLowerCase().includes("next week")){
    const week=new Date()
    week.setDate(week.getDate()+7)
    dueDate=week
    title=title.replace("next week","").trim()
 }
 onSubmit({ id: new Date(), title,
priorityDropdown:taskValue.priorityDropdown,
dueDate,
completed:false

 })
 setTaskValue({
    title:"",
    dueDate:"",
    priorityDropdown:"",
    completed:false
 })
 }
    return (  
        <div>
        <form onSubmit={handleSubmit}>
            <input name="title" type="text" value={taskValue.title} placeholder="input task here" onChange={handleChange}/>
            
            <button>Add Task</button>

        </form>
         
        </div>
    );
}
 
export default AddTaskForm;