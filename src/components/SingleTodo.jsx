import styled from "styled-components";

const StyleTask = styled.div`
  &.form-wrapper{
    background-color: var(--very-dark-desaturated-blue);
    position: relative;
    border-radius: unset;
    border-bottom: 1px solid var(--very-dark-grayish-blue);

    &:first-of-type{
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    .task-name{
      margin-left: -29px;
    }

    .delete-task{
      position: absolute;
      right: 26px;
      cursor: pointer;
    }

    label.img-box{
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      left: -29px;

      background-color: var(--very-dark-desaturated-blue);
      border: 2px solid var(--very-dark-grayish-blue);
      border-radius: 50%;
      transition: all 0.3s ease;
      cursor: pointer;
      
      height: 31px; width: 31px;
      
      > img {
        height: 12px; width: 13px;
        opacity: 0;
        z-index: 1;
      }

      &:hover::before {
        opacity: 1;
      }

      &::before {
        content: '';
        position: absolute;
        border-radius: 50%;
        height: 31px; width: 31px;
        top: -3px; left: -2px;
        padding: 2px;
        z-index: 0;
        
        background: var(--check-background);
        -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        transition: opacity 0.3s ease;
        opacity: 0;
      }

    }
    
    input[type="checkbox"]:checked + label.img-box {
      > img{
        opacity: 1;
      }
      &::after{
        content: "";
        position: absolute;
        background: var(--check-background);
        border-radius: 50%;
        top: 0; left: 0;
        width: 100%; height: 100%;
      }
      &::before{
        content: unset;
      }
      
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
      
      <label className="img-box" htmlFor={`task_${indice}`}>
        <img src="../public/images/icon-check.svg" alt="Imagen check" />
      </label>

      <label className="task-name">{task.name}</label>
      <img
        src="/images/icon-cross.svg" 
        className="delete-task" 
        alt="Eliminar tarea"
        onClick={handleClick}
      />
    </StyleTask>
  )
}
