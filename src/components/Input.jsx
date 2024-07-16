import React, { useRef } from 'react'
import { FaPlus } from "react-icons/fa";
export default function Input(props) {
  const inputBox = useRef();
  return (
    <div className='p-3 flex justify-around'>
        <input type="text" placeholder='Enter Data Here' className='p-3 focus:outline-none w-[90%] border vorder-slate-400'ref={inputBox} />
        <div className='cursor-pointer w-[50px] h-[50px] bg-[orange] text-white text-5x1 rounded-[50px] flex justify-center items-center ' onClick={()=>{
           props.handler(inputBox.current.value)
           inputBox.current.value = "";
        } }>
            <FaPlus />
        </div>
    </div>
  )
}
