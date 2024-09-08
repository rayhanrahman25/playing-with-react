import {React, useState } from 'react'
import { UseTodo } from '../contexts'

export default function TodoForm() {
  const [todo, setTodo] = useState("")
  const {addTodo} = UseTodo();

  const add = (e) => {
      e.preventDefault()
      if(!todo) return
      addTodo({todo, completed: true});
  }

  return (
    <form className='flex'>
    <input type="text" 
    placeholder='Write Todo...'
    className='w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
    />
    <button type="submit"
    className='rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
    onClick={add}
    >Add</button>
</form>
  )
}
