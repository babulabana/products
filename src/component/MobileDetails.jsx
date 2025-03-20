import React, { useRef, useState } from 'react'
import mdata from './mobiledata'
import { useParams } from 'react-router'

export default function MobileDetails() {
    let params = useParams()
    let pid = params.pid
    const [mobileinfo,setmobileinfo]= useState(mdata.find((p)=>p.id==pid))
    let imgref = useRef()
  return (
    <div>
      <div>
            <div>
               {mobileinfo.additionalImages.map((i)=>{
                return <img src={i} onClick={()=>imgref.current.src = i} alt="" className='border-1 h-16 w-16' />
               })} 
            </div>
            <div>
            <img src={mobileinfo.img}  ref={imgref}
                     className="border-1 h-full w-64" alt="" />
            </div>

      </div>
      <div>

      </div>
    </div>
  )
}
