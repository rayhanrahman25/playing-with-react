// import { useState } from 'react'

import { useEffect, useState } from 'react'
import './App.css'
import { todoProvider } from './contexts';

function App() {

  const [todos, setTodos] = useState("")


  const addTodo = (todo) => {
      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) => {
      setTodos((prev) => prev.map((prevItem) => (prevItem.id === todo.id) ? todo : prevItem) )
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ?  {...prevTodo, complete: !prevTodo.complete} : prevTodo))
  }

  return (
    <todoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
              <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
              <div className="mb-4">
                  
                 
              </div>
              <div className="flex flex-wrap gap-y-3">
                  {/*Loop and Add TodoItem here */}
                  
              </div>
          </div>
        </div>
    </todoProvider>
  )
}

export default App
