import styled from "styled-components";
import PropTypes from "prop-types";

const StyleTask = styled.div`
  &.single-task {
    position: relative;
    border-radius: unset;

    &:first-of-type {
      border-top-left-radius: 7px;
      border-top-right-radius: 7px;
    }

    /* Botón eliminar tarea */
    button.delete-task {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      background: transparent;
      border: none;
      padding: 6px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      transition:
        opacity 0.2s ease,
        transform 0.2s ease;

      > img {
        display: block;
        width: 18px;
        height: 18px;
      }
    }

    &:hover button.delete-task,
    &:focus-within button.delete-task {
      opacity: 1;
    }

    button.delete-task:hover {
      transform: translateY(-50%) scale(1.2);
    }

    /* Checkbox personalizado */
    label.img-box {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      flex-shrink: 0;

      border-radius: 50%;
      cursor: pointer;
      height: 31px;
      width: 31px;

      > img {
        height: 12px;
        width: 13px;
        opacity: 0;
        z-index: 1;
        transition: opacity 0.15s ease;
      }

      &:hover::before {
        opacity: 1;
      }

      &::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 50%;
        padding: 2px;
        z-index: 0;

        background: var(--check-background);
        -webkit-mask:
          linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        -webkit-mask-composite: destination-out;
        mask-composite: exclude;
        opacity: 0;
        transition: opacity 0.2s ease;
      }
    }


    input[type="checkbox"] {
      display: none;

      &:checked + label.img-box {
        > img {
          opacity: 1;
        }

        &::after {
          content: "";
          position: absolute;
          background: var(--check-background);
          border-radius: 50%;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        &::before {
          content: unset;
        }
      }
    }

    /* Nombre de la tarea */
    label.task-name {
      flex: 1;
      cursor: default;
      transition:
        color 0.2s ease,
        text-decoration-color 0.2s ease;
    }

    /* Tarea completada — texto tachado */
    &.completed label.task-name {
      text-decoration: line-through;
      color: var(--dark-grayish-blue) !important;
      opacity: 0.7;
    }
  }
`;

/**
 * Componente que representa una tarea individual.
 */
SingleTodo.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
  }).isRequired,
  removeItemTodo: PropTypes.func.isRequired,
  indice: PropTypes.number.isRequired,
  changeActiveField: PropTypes.func.isRequired,
};

export default function SingleTodo({
  task,
  removeItemTodo,
  indice,
  changeActiveField,
}) {
  const handleDelete = () => {
    removeItemTodo(task);
  };

  const handleChange = () => {
    changeActiveField(task.id);
  };

  const isCompleted = !task.active;

  return (
    <StyleTask
      className={`form-wrapper single-task ${isCompleted ? "completed" : ""}`}
    >
      <input
        type="checkbox"
        id={`task_${indice}`}
        onChange={handleChange}
        checked={isCompleted}
        aria-label={`Marcar "${task.name}" como ${isCompleted ? "activa" : "completada"}`}
      />

      <label className="img-box" htmlFor={`task_${indice}`} aria-hidden="true">
        <img src="/images/icon-check.svg" alt="" />
      </label>

      <label className="task-name" htmlFor={`task_${indice}`}>
        {task.name}
      </label>

      <button
        className="delete-task"
        onClick={handleDelete}
        type="button"
        aria-label={`Eliminar tarea "${task.name}"`}
        title={`Eliminar "${task.name}"`}
      >
        <img src="/images/icon-cross.svg" alt="" aria-hidden="true" />
      </button>
    </StyleTask>
  );
}
