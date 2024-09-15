import React, { useEffect, useState } from 'react';
import { UseTodo } from '../contexts';

function TodoItem({ todo }) {
  const { toggleComplete, updateTodo, deleteTodo} = UseTodo();
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const handleCheckboxChange = () => {
    toggleComplete(todo.id);
  };

  const removeTodo = () => {
    deleteTodo(todo.id)
  }

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black`}
    >
      <input
        type="checkbox"
        className='cursor-pointer'
        checked={todo.completed}
        onChange={handleCheckboxChange}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg text-white`}
        value={todoMsg}
        readOnly={!isTodoEditable}
        onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50'
        onClick={
        () => {
          if(todo.completed) return
          if(isTodoEditable){
            editTodo()
          }else setIsTodoEditable((prev) => !prev)
        } 
        }>
        {isTodoEditable === true ? "📁" : "✏️"}
      </button>
      <button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={
          () => {
            removeTodo()
          }
        }
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
