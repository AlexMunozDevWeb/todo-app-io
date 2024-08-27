import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

import { useTodoList } from "./hooks/useTodoList"

function App() {

  const {todoList, 
         addTodoList} = useTodoList()

  return (
    <>
      <Header
        todoList={todoList}
        addItem={addTodoList}
      />
      <ListTodoWrapper 
        todoList={todoList}
      />
    </>
  )
}

export default App
