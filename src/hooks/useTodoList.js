import { useState } from "react"

export const useTodoList = () => {

  const [todoList, setTodoList] = useState([])

  // Add an element to the state
  function addItemTodo(task) {
    setTodoList( [...todoList, task] )
  }

  // Remove an element to the state
  function removeItemTodo(taskToRemove){
    const updatedTodoList = todoList.filter( todoList => todoList.id !== taskToRemove.id )
    setTodoList(updatedTodoList)
  }

  return {
    todoList,
    addItemTodo,
    removeItemTodo
  }
}

