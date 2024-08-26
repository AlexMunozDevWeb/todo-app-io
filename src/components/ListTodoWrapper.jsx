import styled from "styled-components";

const StyleMain = styled.main`
  &.main-content{
    background-color: var(--very-dark-blue);
    display: flex;
    height: calc(100vh - 300px);

    .container{
      .tasks-filter-container{
        transform: translateY(-33px);

        .wrapper-{
          &tasks{
            border-radius: 7px;

            .form-wrapper{
              position: relative;
              border-radius: unset;
              border-bottom: 1px solid var(--very-dark-grayish-blue);

              &:first-of-type{
                border-top-left-radius: 7px;
                border-top-right-radius: 7px;
              }

              &:last-of-type{
                border-bottom: unset;
                border-bottom-right-radius: 7px;
                border-bottom-left-radius: 7px;
              }

              & input[type="checkbox"]:checked + label {
                  text-decoration: line-through;
              }

              & .delete-task{
                position: absolute;
                right: 26px;
                cursor: pointer;
              }

              &.info-delete{
                display: flex;
                justify-content: space-between;
                padding: 10px 30px;
                margin-bottom: 30px;
  
              }

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

export default function ListTodoWrapper() {
  return (
    <StyleMain className="main-content">
      <div className="container">

        <form className="tasks-filter-container">

          <div className="wrapper-tasks">
            <div className="form-wrapper">
              <input type="checkbox" id="create_task1" />
              <label htmlFor="create_task1">Tarea 1</label>
              <img src="/images/icon-cross.svg" className="delete-task" alt="Eliminar tarea" />
            </div>
            <div className="form-wrapper">
              <input type="checkbox" id="create_task2" />
              <label htmlFor="create_task2">Tarea 2</label>
              <img src="/images/icon-cross.svg" className="delete-task" alt="Eliminar tarea" />
            </div>
            <div className="form-wrapper">
              <input type="checkbox" id="create_task3" />
              <label htmlFor="create_task3">Tarea 3</label>
              <img src="/images/icon-cross.svg" className="delete-task" alt="Eliminar tarea" />
            </div>
            <div className="form-wrapper">
              <input type="checkbox" id="create_task4" />
              <label htmlFor="create_task4">Tarea 4</label>
              <img src="/images/icon-cross.svg" className="delete-task" alt="Eliminar tarea" />
            </div>
            <div className="info-delete form-wrapper">
              <p>5 items left</p>
              <button className="form-button">Clear Completed</button>
            </div>
          </div>


          <div className="wrapper-filters form-wrapper">
            <button className="form-button">All</button>
            <button className="form-button">Active</button>
            <button className="form-button">Completed</button>
          </div>

        </form>

      </div>
    </StyleMain>
  )
}
