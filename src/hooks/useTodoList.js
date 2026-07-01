import { useEffect, useState } from "react";

const STORAGE_KEY_TODOS = "todo-app-io:todos";
const STORAGE_KEY_DARK_MODE = "todo-app-io:darkMode";

/**
 * Lee un valor del localStorage de forma segura.
 * Devuelve `fallback` si no existe o si el JSON es inválido.
 */
function readFromStorage(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw !== null ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export const useTodoList = () => {
  const [todoList, setTodoList] = useState(() =>
    readFromStorage(STORAGE_KEY_TODOS, []),
  );
  const [todoFilter, setTodoFilter] = useState([]);
  const [activeFilter, setActiveFilter] = useState({
    active: false,
    type: "all",
  });
  const [darkMode, setDarkMode] = useState(() =>
    readFromStorage(STORAGE_KEY_DARK_MODE, true),
  );

  // Persistir todoList en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(todoList));
  }, [todoList]);

  // Persistir darkMode en localStorage cuando cambie
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY_DARK_MODE, JSON.stringify(darkMode));
  }, [darkMode]);

  // Aplicar clase dark/light al wrapper principal
  useEffect(() => {
    const mainApp = document.querySelector(".main-app");
    if (!mainApp) return;
    if (darkMode) {
      mainApp.classList.replace("light-mode", "dark-mode");
    } else {
      mainApp.classList.replace("dark-mode", "light-mode");
    }
  }, [darkMode]);

  // Añadir un elemento al estado
  function addItemTodo(task) {
    activeFilter.type !== "completed" &&
      setTodoFilter((prev) => [...prev, task]);
    setTodoList((prev) => [...prev, task]);
  }

  // Eliminar un elemento del estado
  function removeItemTodo(taskToRemove) {
    if (todoFilter.length > 0) {
      setTodoFilter((prev) =>
        prev.filter((item) => item.id !== taskToRemove.id),
      );
    }
    setTodoList((prev) => prev.filter((item) => item.id !== taskToRemove.id));
  }

  /**
   * Alterna el campo `active` de una tarea dado su id.
   */
  function changeActiveField(taskId) {
    const toggle = (prev) =>
      prev.map((item) =>
        item.id === taskId ? { ...item, active: !item.active } : item,
      );

    if (todoFilter.length > 0) {
      setTodoFilter(toggle);
    }
    setTodoList(toggle);
  }

  // Filtrar tareas por estado
  function filterTodo(e, buttonType) {
    e.preventDefault();
    let updatedTodo = [];

    if (buttonType === "active") {
      setActiveFilter({ active: true, type: "active" });
      updatedTodo = todoList.filter((item) => item.active);
    } else if (buttonType === "completed") {
      setActiveFilter({ active: true, type: "completed" });
      updatedTodo = todoList.filter((item) => !item.active);
    } else if (buttonType === "all") {
      setActiveFilter({ active: false, type: "all" });
      updatedTodo = todoList;
    }

    setTodoFilter(updatedTodo);
  }

  // Eliminar todas las tareas completadas
  function clearCompleted(e) {
    e.preventDefault();
    const onlyActive = (item) => item.active === true;
    setTodoFilter((prev) => prev.filter(onlyActive));
    setTodoList((prev) => prev.filter(onlyActive));
  }

  function changeDarkMode() {
    setDarkMode((prev) => !prev);
  }

  return {
    todoList,
    todoFilter,
    activeFilter,
    darkMode,
    addItemTodo,
    removeItemTodo,
    filterTodo,
    changeActiveField,
    clearCompleted,
    changeDarkMode,
  };
};
