import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../../features/TodoSlilce'


function Todo() {
  const todos = useSelector((state) => state.todo.todos)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Todo</h1>
      <ul className='shadow-inner overflow-auto justify-start max-h-[90%] rounded-2xl gap-1 w-[80%] h-[50%] flex flex-col items-center'>
        {todos.map((todo) => (
          <li key={todo.id} className='w-[96%] flex-wrap flex justify-between items-center rounded-md p-2'>
            <p className='w-[80%]'>
              {todo.text === "" ? "No Todo" : todo.text}
            </p>
            <button className='bg-green-500 h-[30px] rounded w-[20%]' onClick={() => dispatch(removeTodo({ id: todo.id }))}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Todo