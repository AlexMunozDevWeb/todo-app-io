import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

import { useTodoList } from "./hooks/useTodoList"

function App() {

  const {todoList,
         todoFilter,
         activeFilter, 
         addItemTodo,
         removeItemTodo,
         filterTodo,
         changeActiveField,
         clearCompleted} = useTodoList()
      
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
        filterTodo={filterTodo}
        changeActiveField={changeActiveField}
        clearCompleted={clearCompleted}
        activeFilter={activeFilter}
      />
    </>
  )
}

export default App
