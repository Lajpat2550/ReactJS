import { useState } from 'react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../../features/TodoSlilce'

const AddTodo = ({ value }) => {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo({text : input}))
        setInput("")
    }

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 flex flex-row w-[100%] h-[20%] justify-center items-center">

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Add Todo'
                className='border-2 outline-none shadow mx-auto w-[60%] h-[50%] border-gray-300 rounded-md p-2' />
            <button className='bg-blue-400 outline-none mr-[40px] flex justify-center items-center text-xl w-auto h-[30px] text-white rounded-md p-2 ml-2'>{value}</button>

        </form>
    )

}

export default AddTodo