import styled from "styled-components";

const StyleTask = styled.div`
  &.single-task{
    position: relative;
    border-radius: unset;

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
      
      border-radius: 50%;
      cursor: pointer;
      
      height: 31px; width: 31px;

      &:hover{
        border: none;
      }
      
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
        top: 0px; left: 0px;
        padding: 2px;
        z-index: 0;
        
        background: var(--check-background);
        -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
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

export default function SingleTodo( { task, removeItemTodo, indice, changeActiveField } ) {

  const handleClick = () => {
    removeItemTodo(task)
  }

  const handleChange = () => {
    changeActiveField(task.id)
  }

  return (
    <StyleTask className={`form-wrapper single-task`}>
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
