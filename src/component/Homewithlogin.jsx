import React, { useState } from 'react'
import Logout from './Logout'
import Login from './Login'
import Userhome from './Userhome'

export default function HomeWithlogin() {
    const [userlogin ,setuserlogin] = useState(false)

    let ui = <div><Userhome userlogin={userlogin} setuserlogin={setuserlogin}></Userhome><Logout setuserlogi={setuserlogin}></Logout></div>
  return (
    <div>
      
      {/* <h1>homewithlogin</h1>  */}
      
      {/* <p>current value of userlogin is {userlogin.toString()}</p> */}
      {userlogin?ui:<Login setuserlogin={setuserlogin}></Login>}

         </div>
  )
}
