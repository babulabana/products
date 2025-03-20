import React, { useEffect, useState } from 'react'
import mdata from './mobiledata'
import { Link } from 'react-router'
export default function Mobiles() {
    const [mobile,setmobile] = useState()

    useEffect(()=>{
       
        let md = mdata.map((p)=>{
            return  <div className='flex flex-col h-64 w-64 gap-4'>
            <img src={p.img} alt="" className='w-1/2 aspect-square' />
            <div className='text-xl font-bold' >{p.name}</div>
            <div><Link to={"/mobiledetails/"+p.id}>View Details</Link></div>
        </div>
        })
        setmobile(md);

    },[])
  return (
    <div>
      {mobile}
    </div>
  )
}
