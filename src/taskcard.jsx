 const TaskCard = ({ task, handleDelete, handleCheck }) => {
  return (
    <div className={`list-items ${task.completed ? "completed" : ""}`}>
      
      <h4>{task.title}</h4>

      <p>Due: {task.dueDate? new Date(task.dueDate).toDateString():""}</p>
     <label htmlFor="checkbox">completed</label>
      <input
      name="checkbox"
        type="checkbox"
        checked={task.completed}
        onChange={() => handleCheck(task.id)}
      />

      <button
        className="delete-btn"
        onClick={() => handleDelete(task.id)}
      >
        ❌
      </button>

    </div>
  );
};

export default TaskCard;