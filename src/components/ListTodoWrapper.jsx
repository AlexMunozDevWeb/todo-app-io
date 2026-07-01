import styled from "styled-components";
import SingleTodo from "./SingleTodo";
import { useState } from "react";
import PropTypes from "prop-types";

const StyleMain = styled.main`
  &.main-content {
    display: flex;
    min-height: calc(100vh - 300px);

    .container {
      .tasks-filter-container {
        transform: translateY(-33px);

        /* Lista de tareas */
        .wrapper-tasks {
          .form-wrapper.info-delete {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 30px;
            margin-bottom: 30px;
            border-radius: unset;
            border-bottom-right-radius: 7px;
            border-bottom-left-radius: 7px;
            font-size: 0.8rem;
          }
        }

        /* Estado vacío */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 40px 20px;
          border-radius: 7px 7px 0 0;
          opacity: 0.6;
          font-size: 0.9rem;

          .empty-icon {
            font-size: 2.5rem;
            line-height: 1;
          }
        }

        /* Filtros */
        .wrapper-filters {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        button.form-button {
          border: unset;
          cursor: pointer;
          font-family: inherit;
          font-size: 0.85rem;
          font-weight: bold;
          letter-spacing: 0.5px;
          padding: 4px 6px;
          border-radius: 3px;
          transition: color 0.2s ease;

          &.active,
          &.active:hover {
            color: var(--blue-bright);
          }
        }
      }
    }
  }
`;

const FILTERS = [
  { type: "all", label: "Todas" },
  { type: "active", label: "Activas" },
  { type: "completed", label: "Completadas" },
];

/**
 * Componente principal que muestra la lista de tareas y los controles de filtro.
 */
ListTodoWrapper.propTypes = {
  todoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  todoFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      active: PropTypes.bool.isRequired,
    }),
  ).isRequired,
  activeFilter: PropTypes.shape({
    active: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  removeItemTodo: PropTypes.func.isRequired,
  filterTodo: PropTypes.func.isRequired,
  changeActiveField: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

export default function ListTodoWrapper({
  todoList,
  todoFilter,
  activeFilter,
  removeItemTodo,
  filterTodo,
  changeActiveField,
  clearCompleted,
}) {
  const [activeButton, setActiveButton] = useState(null);

  const tasks = activeFilter.active ? todoFilter : todoList;
  const itemCount = activeFilter.active ? todoFilter.length : todoList.length;
  const isEmpty = tasks.length === 0;

  const handleFilterClick = (e, type) => {
    setActiveButton(type);
    filterTodo(e, type);
  };

  return (
    <StyleMain className="main-content">
      <div className="container">
        <div className="tasks-filter-container">
          {/* Lista de tareas */}
          <section aria-label="Lista de tareas">
            <div className="wrapper-tasks" role="list">
              {isEmpty ? (
                <div
                  className="form-wrapper empty-state"
                  role="status"
                  aria-live="polite"
                >
                  <span className="empty-icon" aria-hidden="true">
                    📋
                  </span>
                  <p>
                    {activeButton === "completed"
                      ? "No hay tareas completadas"
                      : activeButton === "active"
                        ? "No hay tareas activas"
                        : "¡Añade tu primera tarea!"}
                  </p>
                </div>
              ) : (
                tasks.map((task, index) => (
                  <SingleTodo
                    key={task.id}
                    indice={index}
                    task={task}
                    removeItemTodo={removeItemTodo}
                    changeActiveField={changeActiveField}
                  />
                ))
              )}

              {!isEmpty && (
                <div className="info-delete form-wrapper" aria-live="polite">
                  <p>
                    {itemCount} {itemCount === 1 ? "item left" : "items left"}
                  </p>
                  <button
                    className="form-button"
                    onClick={clearCompleted}
                    type="button"
                    aria-label="Eliminar todas las tareas completadas"
                  >
                    Clear Completed
                  </button>
                </div>
              )}
            </div>

            {/* Filtros */}
            <nav
              className="wrapper-filters form-wrapper"
              aria-label="Filtros de tareas"
            >
              {FILTERS.map(({ type, label }) => (
                <button
                  key={type}
                  className={`form-button ${activeButton === type ? "active" : ""}`}
                  data-type={type}
                  onClick={(e) => handleFilterClick(e, type)}
                  type="button"
                  aria-pressed={activeButton === type}
                  aria-label={`Filtrar por: ${label}`}
                >
                  {label}
                </button>
              ))}
            </nav>
          </section>
        </div>
      </div>
    </StyleMain>
  );
}
