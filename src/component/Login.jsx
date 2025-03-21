
// import React, { useRef, useState } from "react";

// export default function Login(props) {
//   const [msg, setMsg] = useState("");
//   let usernameref = useRef();
//   let pwdref = useRef();

//   let checkLogin = () => {
//     if (usernameref.current.value === "admin" && pwdref.current.value === "123") {
//       props.setuserlogin(true);
//     } else {
//       setMsg("Invalid credentials");
//     }
//   };

//   let clearForm = () => {
//     usernameref.current.value = "";
//     pwdref.current.value = "";
//     setMsg("");
//   };

//   return (
//     <div className=" bg-blue-500 flex text-white flex-col w-1/4  justify-center items-center mx-auto p-10 gap-5">
//       <div>
//         <label>Username: </label>
//         <input type="text" className="border-2 border-white" ref={usernameref} />
//       </div>
//       <div>
//         <label>Password: </label>
//         <input type="password" className="border-2 border-white" ref={pwdref} />
//       </div>
//       <div className="flex gap-5">
//         <input type="button" value="Login" className="border-2 border-sky-400 hover:border-white px-4" onClick={()=>checkLogin()} />
//         <input type="button" value="Cancel" className="border-2 border-sky-400 hover:border-white px-4" onClick={()=>clearForm()} />
//       </div>
//       <p>{msg}</p>
//     </div>
//   );
// }

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
    <div className="bg-blue-500 mt-20 flex flex-col w-full max-w-sm mx-auto p-6 sm:p-8 md:p-10 lg:p-12 gap-6 rounded-lg shadow-lg">
      <div className="text-center">
        <h2 className="text-2xl font-semibold text-white">Login</h2>
      </div>
      <div>
        <label htmlFor="username" className="block text-white mb-2">Username:</label>
        <input
          id="username"
          type="text"
          className="w-full p-3 border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          ref={usernameref}
        />
      </div>
      <div>
        <label htmlFor="password" className="block text-white mb-2">Password:</label>
        <input
          id="password"
          type="password"
          className="w-full p-3 border-2 border-white rounded-md focus:outline-none focus:ring-2 focus:ring-sky-400"
          ref={pwdref}
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:gap-5 mt-4">
        <input
          type="button"
          value="Login"
          className="w-full sm:w-auto bg-sky-400 text-white py-2 px-6 rounded-md hover:bg-sky-500 focus:outline-none transition-colors duration-200"
          onClick={checkLogin}
        />
        <input
          type="button"
          value="Cancel"
          className="w-full sm:w-auto mt-4 sm:mt-0 bg-red-500 text-white py-2 px-6 rounded-md hover:bg-red-600 focus:outline-none transition-colors duration-200"
          onClick={clearForm}
        />
      </div>
      {msg && <p className="text-center text-red-500 mt-4">{msg}</p>}
    </div>
  );
}

