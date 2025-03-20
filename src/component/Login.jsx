
import React, { useRef, useState } from "react";

export default function Login(props) {
  const [msg, setMsg] = useState("");
  let usernameref = useRef();
  let pwdref = useRef();

  let checkLogin = () => {
    if (usernameref.current.value === "admin" && pwdref.current.value === "123") {
      props.setuserlogin(true);
    } else {
      setMsg("Invalid credentials");
    }
  };

  let clearForm = () => {
    usernameref.current.value = "";
    pwdref.current.value = "";
    setMsg("");
  };

  return (
    <div className=" bg-blue-500 flex text-white flex-col w-1/4  justify-center items-center mx-auto p-10 gap-5">
      <div>
        <label>Username: </label>
        <input type="text" className="border-2 border-white" ref={usernameref} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" className="border-2 border-white" ref={pwdref} />
      </div>
      <div className="flex gap-5">
        <input type="button" value="Login" className="border-2 border-sky-400 hover:border-white px-4" onClick={()=>checkLogin()} />
        <input type="button" value="Cancel" className="border-2 border-sky-400 hover:border-white px-4" onClick={()=>clearForm()} />
      </div>
      <p>{msg}</p>
    </div>
  );
}

