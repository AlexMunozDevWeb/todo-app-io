import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
  display: flex;
  position: relative;

  min-height: 300px;
  width: 100%;
  padding: 50px 0 85px 0;

  input[type="text"] {
    border: none;
    line-height: 15px;
    padding: 10px 5px;
    width: 100%;
    background: transparent;

    &:active,
    &:focus {
      outline: none;
    }
  }

  .bg-image {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    object-fit: cover;
    z-index: -1;
  }

  .title-button-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    > h1 {
      height: 31px;
      letter-spacing: 10px;
      font-size: clamp(1.4rem, 4vw, 2rem);
      color: var(--very-light-gray);
    }

    > button.theme-toggle {
      background-color: transparent;
      border: none;
      cursor: pointer;
      height: fit-content;
      padding: 4px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition:
        opacity 0.2s ease,
        transform 0.3s ease;

      &:hover {
        opacity: 0.8;
        transform: rotate(20deg);
      }

      > img {
        width: 26px;
        height: 26px;
      }
    }
  }

  .form-wrapper {
    button.add-task {
      position: relative;
      cursor: pointer;
      flex-shrink: 0;

      border-radius: 50%;
      height: 30px;
      width: 30px;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.1);
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

      &:hover::before {
        opacity: 1;
      }
    }
  }
`;

/**
 * Crea un objeto de tarea nuevo con id único.
 * @param {string} name - Nombre de la tarea
 * @returns {{ id: string, active: boolean, name: string }}
 */
function createTodo(name) {
  return { id: uuidv4(), active: true, name };
}

/**
 * Cabecera de la aplicación.
 * Muestra el título, el toggle de tema y el formulario para añadir tareas.
 */
Header.propTypes = {
  addItem: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  changeDarkMode: PropTypes.func.isRequired,
};

export default function Header({ addItem, darkMode, changeDarkMode }) {
  const bgImage = darkMode ? "bg-mobile-dark.webp" : "bg-mobile-light.webp";
  const iconDarkMode = darkMode ? "icon-sun.svg" : "icon-moon.svg";
  const themeLabel = darkMode
    ? "Cambiar a modo claro"
    : "Cambiar a modo oscuro";

  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmed = newTodo.trim();
    if (trimmed.length > 0) {
      addItem(createTodo(trimmed));
      setNewTodo("");
    }
  };

  return (
    <StyledHeader>
      <picture>
        <source
          media="(min-width: 601px)"
          srcSet={`/images/${darkMode ? "bg-desktop-dark.webp" : "bg-desktop-light.webp"}`}
        />
        <img
          src={`/images/${bgImage}`}
          alt=""
          aria-hidden="true"
          className="bg-image"
        />
      </picture>

      <div className="container">
        <div className="title-button-wrapper">
          <h1>TODO</h1>
          <button
            className="theme-toggle"
            onClick={changeDarkMode}
            aria-label={themeLabel}
            title={themeLabel}
            type="button"
          >
            <img src={`/images/${iconDarkMode}`} alt="" aria-hidden="true" />
          </button>
        </div>

        <form onSubmit={handleSubmit} aria-label="Añadir nueva tarea">
          <div className="form-wrapper">
            <button
              className="add-task"
              type="submit"
              aria-label="Añadir tarea"
              title="Añadir tarea"
            />
            <input
              type="text"
              id="text_todo"
              name="todo"
              placeholder="Crear nuevo todo..."
              value={newTodo}
              onChange={handleChange}
              autoComplete="off"
              aria-label="Nueva tarea"
            />
          </div>
        </form>
      </div>
    </StyledHeader>
  );
}
