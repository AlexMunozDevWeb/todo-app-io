import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

import { useTodoList } from "./hooks/useTodoList"

function App() {

  const {todoList, 
         addItemTodo,
         removeItemTodo} = useTodoList()

  console.table(todoList);
      
  return (
    <>
      <Header
        todoList={todoList}
        addItem={addItemTodo}
      />
      <ListTodoWrapper 
        todoList={todoList}
        removeItemTodo={removeItemTodo}
      />
    </>
  )
}

export default App
