import styled from "styled-components";

const StyleTask = styled.div`
&.form-wrapper{
  position: relative;
  border-radius: unset;
  border-bottom: 1px solid var(--very-dark-grayish-blue);

  &:first-of-type{
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  & input[type="checkbox"]:checked + label {
      text-decoration: line-through;
  }

  & .delete-task{
    position: absolute;
    right: 26px;
    cursor: pointer;
  }

}
`;

export default function SingleTodo( { task, removeItemTodo, indice, changeActiveField} ) {

  const handleClick = () => {
    removeItemTodo(task)
  }

  const handleChange = () => {
    changeActiveField(task.id)
  }

  return (
    <StyleTask className="form-wrapper">
      <input 
        type="checkbox" 
        id={`task_${indice}`}
        onChange={handleChange}
        checked={task.active ? false : true}        
      />
      <label htmlFor={`task_${indice}`}>{task.name}</label>
      <img 
        src="/images/icon-cross.svg" 
        className="delete-task" 
        alt="Eliminar tarea"
        onClick={handleClick}
        />
    </StyleTask>
  )
}
