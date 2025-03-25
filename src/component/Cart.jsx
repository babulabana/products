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
// import React, { useEffect, useState } from 'react'
// import { useContext } from 'react'
// import { Cartcontext } from '../contexts/Cartcontext'

// export default function Cart() {
//     const [count,setcount] =useState(0)
//     const [amt,setamt] =useState(0)
//     var cart = useContext(Cartcontext                )
//     useEffect(()=>{
//         console.log("use effect called")
//     },[count])
//   return (
//     <div className='flex gap-10'>
//       <input type="button" value="+" className='border-2 ' onClick={()=>setcount(count+1)} />
//       <input type="button" value="price" className='border-2 'onClick={()=>setamt(amt+1)} />
//       cartrg:
//       {count}
//       {amt}
//     </div>
//   )
// }
