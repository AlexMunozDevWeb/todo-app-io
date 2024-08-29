import { useState } from "react"

export const useTodoList = () => {

  const [todoList, setTodoList] = useState([])
  const [todoFilter, setTodoFilter] = useState([])
  const [activeFilter, setActiveFilter] = useState( {active: false, type: 'all'} )

  // Add an element to the state
  function addItemTodo(task) {    
    activeFilter.type !== 'completed' && setTodoFilter([...todoFilter, task])
    setTodoList( [...todoList, task] )
  }

  // Remove an element to the state
  function removeItemTodo(taskToRemove){
    if( todoFilter.length > 0 ){
      const updatedTodoList = todoFilter.filter( todoList => todoList.id !== taskToRemove.id )
      setTodoFilter(updatedTodoList)
    }
    const updatedTodoList = todoList.filter( todoList => todoList.id !== taskToRemove.id )
    setTodoList(updatedTodoList)
  }

  /**
   * @param {*} taskId 
   * * Updating the field active given the id
   * * prevState -> es una función que recibe el estado anterios
   */
  function changeActiveField(taskId){
    if( todoFilter.length > 0 ){
      setTodoFilter(prevState =>
        prevState.map(item =>
          item.id === taskId ? { ...item, active: !item.active } : item
        )
      );
    }
    setTodoList(prevState =>
      prevState.map(item =>
        item.id === taskId ? { ...item, active: !item.active } : item
      )
    );
  }

  // Filter by active todo
  function filterTodo(e, buttonType){
    e.preventDefault()    
    let updatedTodo = []

    if(buttonType === 'active'){
      setActiveFilter({active: true, type: 'active'})
      updatedTodo = todoList.filter( todoList => todoList.active )

    }else if(buttonType === 'completed'){
      setActiveFilter({active: true, type: 'completed'})
      updatedTodo = todoList.filter( todoList => !todoList.active )

    }else if(buttonType === 'all'){
      setActiveFilter({active: false, type: 'all'})
      updatedTodo = todoList

    }
                  
    setTodoFilter(updatedTodo)
  }

  // Restart the TODO list
  function clearCompleted(e){
    e.preventDefault()
    const updatedFilter = todoFilter.filter( todoList => todoList.active === true )
    setTodoFilter(updatedFilter)
    const updatedTodo = todoList.filter( todoList => todoList.active === true )
    setTodoList(updatedTodo)
  }

  return {
    todoList,
    todoFilter,
    activeFilter,
    addItemTodo,
    removeItemTodo,
    filterTodo,
    changeActiveField,
    clearCompleted,
  }
}

