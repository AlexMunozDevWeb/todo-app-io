import styled from "styled-components";
import SingleTodo from "./SingleTodo";

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
            display: flex;
            justify-content: center;
            gap: 15px;
          }
        }

      }
    }

  }
`; 

export default function ListTodoWrapper({todoList,todoFilter,removeItemTodo, filterByActive, changeActiveField, restartTodo}) {

  const tasks = todoFilter.length === 0 ? todoList : todoFilter

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
              <p>{`${todoList.length} items left`}</p>
              <button 
                className="form-button"
                onClick={restartTodo}>Clear Completed</button>
            </div>
          </div>

          <div className="wrapper-filters form-wrapper">
            <button className="form-button">All</button>
            <button 
              className="form-button"
              onClick={filterByActive}
            >Active</button>
            <button className="form-button">Completed</button>
          </div>

        </form>

      </div>
    </StyleMain>
  )
}
