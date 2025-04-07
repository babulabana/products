import React from 'react'
import { useSelector } from 'react-redux'

export default function Forincrement() {
    let count = useSelector((data)=>data.counter.value)
  return (
    <div>
      <p>current counter in {count}</p>
    </div>
  )
}
