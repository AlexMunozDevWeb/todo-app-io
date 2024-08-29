import Header from "./components/Header"
import ListTodoWrapper from "./components/ListTodoWrapper"

import { useTodoList } from "./hooks/useTodoList"
import { DarkModeStyles } from "./styles/DarkModeStyles";

function App() {

  const {todoList,
         todoFilter,
         activeFilter,
         darkMode, 
         addItemTodo,
         removeItemTodo,
         filterTodo,
         changeActiveField,
         clearCompleted,
         changeDarkMode} = useTodoList()
      
  return (
    <DarkModeStyles id="main-app">
      <Header
        todoList={todoList}
        addItem={addItemTodo}
        darkMode={darkMode}
        changeDarkMode={changeDarkMode}
      />
      <ListTodoWrapper 
        todoList={todoList}
        todoFilter={todoFilter}
        darkMode={darkMode}
        removeItemTodo={removeItemTodo}
        filterTodo={filterTodo}
        changeActiveField={changeActiveField}
        clearCompleted={clearCompleted}
        activeFilter={activeFilter}
      />
    </DarkModeStyles>
  )
}

export default App
