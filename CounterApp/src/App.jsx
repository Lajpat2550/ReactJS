import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="rounded-md bg-white w-[380px] shadow-[0_25px_40px_-30px_rgb(0,0,0)] h-[600px] gap-1 px-8 flex flex-col items-center justify-center">
        <div className="reload h-[5%] w-[100%] flex justify-end items-center">
          <button onClick={()=> setCount(0)} type='reset' className='rotate-70 text-lg backdrop-blur-sm mt-1 active:scale-90 transition-all duration-200 ease-in-out'>
            ↻
          </button>
        </div>
        <div className="display w-[100%] rounded-2xl h-[70%] bg-[linear-gradient(to_right,#faf789_0%,#fdff82_20%,#c7fa6a_100%)] flex justify-center items-center text-[50px]">{count}</div>
        <div className="btns w-[100%] h-[25%] flex justify-center items-center gap-3">
          <button onClick={()=> setCount((prev)=>prev+1)} className='rounded bg-gray-100 text-xl font-bold shadow-[0_3px_4px_0px_rgb(180,180,180)] w-[50%] h-[40%]'>+</button>
          <button onClick={()=> setCount((prev)=>prev >0 ? prev-1 : 0)} className='rounded bg-gray-100 text-xl font-bold shadow-[0_3px_4px_0px_rgb(180,180,180)] w-[50%] h-[40%]'>-</button>
        </div>
      </div>
    </>
  )
}

export default App
