import { Header } from './components/Header'
import { Tabs } from './components/Tabs'
import { TodoInput } from './components/TodoInput'
import { TodoList } from './components/TodoList'

import {useState, useEffect} from 'react'

function App() {

  // const todos = [
  //   {input: 'Hello! Add your first todo!', complete: true},
  //   {input: 'Explore the abyss of your own thoughts and failures', complete: false}
  // ]

  const [todos, setTodos] = useState([
    {input: 'Explore the abyss of your own thoughts and failures', complete: false}
  ])

  const [selectedTab, setSelectedTab] = useState('Open')

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, {input: newTodo, complete: false}]
    setTodos(newTodoList)

    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) {
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo

    setTodos(newTodoList)

    handleSaveData(newTodoList)
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)

    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({todos: currTodos}))
  }

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return }
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])

  return (
    <> 
      <Header todos={todos}/>
      <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} 
      todos={todos}/>
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo = {handleDeleteTodo} selectedTab = {selectedTab} todos={todos}/>
      <TodoInput handleAddTodo = {handleAddTodo}/>
    </>
  )
}

export default App
