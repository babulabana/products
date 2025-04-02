import React from 'react'

export default function Logout(props) {
  return (
    <div  className=" bg-blue-500 flex flex-col w-1/4  justify-center items-center mx-auto p-10 gap-5">
      <input type="button" value="logout"  className="border-2 border-sky-400 hover:border-white px-4" 
      onClick={()=>props.setuserlogin(false)} />
    </div>
  )
}
