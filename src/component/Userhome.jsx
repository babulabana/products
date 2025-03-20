import React from 'react'
import Products from './Products'
import { Link } from 'react-router';

export default function Userhome(props) {
    let userlogin = props.userlogin;
    // let setuserlogin = props.setuserlogin
    let d = {userlogin:userlogin}
    

  return (
    <div>
       <nav>
        {/* <Products userlogin={userlogin} ></Products> */}
        <li><Link to="/products" state={d}>products</Link></li>
        <li><Link to="/mobiles" state={d}>Mobiles</Link></li>
        <li>cart</li>
        <li>your orders</li>
        <li>profile</li>

       </nav>
    </div>
  )
}
