import { act, useState } from "react"
import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

// import { useTodoList } from "./hooks/useTodoList"

function App() {

  // const {todoList, 
  //        addTodoList} = useTodoList()

  const [todoList, setTodoList] = useState([])

  const addItem = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  }

  return (
    <>
      <Header
        todoList={todoList}
        addItem={addItem}
      />
      <ListTodoWrapper 
        todoList={todoList}
      />
    </>
  )
}

export default App
