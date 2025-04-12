import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginaction } from './Userslice'
import { useNavigate } from 'react-router'

export default function LoginR() {
    let usernameref = useRef()
    let pwdref = useRef()
    const [msg,setmsg] = useState("")
    let dispatch = useDispatch()
    let islogin = useSelector((obj)=>obj.user.islogin)
    let navigate = useNavigate()
    if(islogin){
        navigate("/")
    }
    let setlogin=()=>{
        if(usernameref.current.value =="admin" && pwdref.current.value =="123")
        {
          dispatch(loginaction())   
        }
        else{
            setmsg("invalid user")
        }
    }
    let empty=()=>{
        usernameref.current.value="" 
        pwdref.current.value=""
        setmsg("")
    }

  return (
    <div>
        <p>
      <label htmlFor="">Username :</label>
      <input type="text" ref={usernameref} />
      </p>
      <p>
      <label htmlFor="">Password :</label>
      <input type="text"  ref={pwdref}  />
      </p>
      <p>
        <input type="button" value="Login"  onClick={()=>setlogin()} />
        <input type="button" value="Cancle" onClick={()=>empty()} />
      </p>
      <p>{msg}</p>
    </div>
  )
}
