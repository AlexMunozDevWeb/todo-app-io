import styled from "styled-components";
import SingleTodo from "./SingleTodo";
import { useState } from "react";

const StyleMain = styled.main`
  &.main-content{
    background-color: var(--very-dark-blue);
    display: flex;
    min-height: calc(100vh - 300px);

    .container{
      .tasks-filter-container{
        transform: translateY(-33px);

        .wrapper-{
          &tasks{
            .form-wrapper.info-delete{
              background-color: var(--very-dark-desaturated-blue);
              display: flex;
              justify-content: space-between;
              padding: 10px 30px;
              margin-bottom: 30px;
              border-radius: unset;
              border-bottom-right-radius: 7px;
              border-bottom-left-radius: 7px;
            }
          }
          &filters{
            background-color: var(--very-dark-desaturated-blue);
            display: flex;
            justify-content: center;
            gap: 15px;

          }
        }

        button.form-button{
          background-color: var(--very-dark-desaturated-blue);
          border: unset;
          color: var(--dark-grayish-blue);
          cursor: pointer;
          transition: all .3s ease;

          &:hover{
            color: var(--light-grayish-blue-hover) ;
          }

          &.active, &.active:hover{
            color: var(--blue-bright);
          }

        }

      }
    }

  }
`; 

export default function ListTodoWrapper({todoList,todoFilter,activeFilter,removeItemTodo,filterTodo,
                                         changeActiveField, restartTodo}) {

  const [activeButton, setActiveButton] = useState(null);

  const tasks = activeFilter ? todoFilter : todoList

  const handleClick = (e) => {
    const buttonType = e.target.attributes['data-type'].value
    setActiveButton(buttonType);
    filterTodo(e, buttonType)
  }

  return (
    <StyleMain className="main-content">
      <div className="container">

        <form className="tasks-filter-container">
          <div className="wrapper-tasks">
            
            { tasks.map( (task, index) => (
              <SingleTodo 
                indice={index}
                key={task.id}
                task={task}
                removeItemTodo={removeItemTodo}
                changeActiveField={changeActiveField}
              />
            ) ) }

            <div className="info-delete form-wrapper">
              <p>{ activeFilter.active ? `${todoFilter.length} items left` : `${todoList.length} items left` }</p>
              <button 
                className="form-button"
                onClick={restartTodo}>Clear Completed</button>
            </div>
          </div>

          <div className="wrapper-filters form-wrapper">

            <button 
              className={`form-button ${activeButton === 'all' ? 'active' : ''}`}
              data-type="all"
              onClick={handleClick}>All</button>
              
            <button 
              className={`form-button ${activeButton === 'active' ? 'active' : ''}`}
              data-type="active"
              onClick={handleClick}
            >Active</button>

            <button 
              className={`form-button ${activeButton === 'completed' ? 'active' : ''}`}
              data-type="completed"
              onClick={handleClick}>Completed</button>
          </div>

        </form>

      </div>
    </StyleMain>
  )
}
