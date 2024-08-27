import { useState } from "react"

export const useTodoList = () => {

  const [todoList, setTodoList] = useState([])

  function addTodoList(task) {
    setTodoList( [...todoList, task] )
  }

  return {
    todoList,
    addTodoList
  }
}

