import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

import { useTodoList } from "./hooks/useTodoList"

function App() {

  const {todoList,
         todoFilter, 
         addItemTodo,
         removeItemTodo,
         filterByActive,
         changeActiveField,
         restartTodo} = useTodoList()
      
  return (
    <>
      <Header
        todoList={todoList}
        addItem={addItemTodo}
      />
      <ListTodoWrapper 
        todoList={todoList}
        todoFilter={todoFilter}
        removeItemTodo={removeItemTodo}
        filterByActive={filterByActive}
        changeActiveField={changeActiveField}
        restartTodo={restartTodo}
      />
    </>
  )
}

export default App
