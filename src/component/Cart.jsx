import React, { useContext } from 'react'
import { Cartcontext } from '../context/Cartcontext'

export default function Cart() {
    let Cart = useContext(Cartcontext)
  return (
    <div>
      Cart : {JSON.stringify(Cart.items)}
    </div>
  )
}
