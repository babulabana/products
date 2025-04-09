import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './Counterslice'
export default function Forincrement() {
    let count = useSelector((data)=>data.counter.value)
    let dispatch = useDispatch();
    let inc =()=>{
      dispatch(increment())

    }
    let dec =()=>{
      dispatch(decrement())

    }
  return (
    <div className='flex'>
      <input type="button" value="-" onClick={()=>dec()}  className='border-2 bg-blue-400  px-2'/>
      <p className='px-5'> {count}</p>
      
      <input type="button" value="+" onClick={()=>inc()} className='border-2 bg-blue-400  px-2' />
    </div>
  )
}
