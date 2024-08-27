export default function SingleTodo({task,removeItemTodo}) {

  const handleClick = (e) => {
    removeItemTodo(task)
  }

  return (
    <div className="form-wrapper">
      <input type="checkbox" id="create_task1"/>
      <label htmlFor="create_task1">{task.name}</label>
      <img 
        src="/images/icon-cross.svg" 
        className="delete-task" 
        alt="Eliminar tarea"
        onClick={handleClick}
        />
    </div>
  )
}
