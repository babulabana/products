import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
// import {prdts} from './Productdata'
import {prodts} from "./Productdata"
export default function Products(props) {
    // let userlogin ="sdf"
    // console.log(prodts)
    const location = useLocation()
    const navigate = useNavigate()
    useEffect(()=>
    {
        if(location.state!=null)
        {
            console.log("contionye on this page")
        }
        else
        {
            console.log("sent back to login")
            navigate("/homewithlogin")
        }
    })


  //  let prdtui = prdts.map((p)=>{
  //   return <div className=' w-40  text-center  border-2 border-amber-300 bg-yellow-100'>
  //       <img src={p.img}  className='aspect-square'  alt="" />
  //       <p>{p.name}</p>
  //       <p>{p.company}</p>
  //       <p>{p.price}</p>
  //       <Link to={`/productdetails/${p.id}`}>view more</Link>
  //   </div>
  //  })
  //  "_id": 20,
  //     "title": "Formal for Men",
  //     "isNew": false,
  //     "oldPrice": "500",
  //     "price": 490,
  //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
  //     "category": "women",
  //     "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     "rating": 5
  let prodtsui = prodts.map((p)=>{
    return <div className=' w-40   text-center  border-2 border-amber-300 bg-yellow-100'>
        <img src={p.img} className='aspect-square' alt="" />
        <p>{p.title}</p>
        <p>{p.category}</p>
        <p>price {p.price}</p>
        <p>oldPrice {p.oldPrice}</p>
        
        <p>{p.rating}</p>
        <Link to={`/productdetails/${p._id}`}>view more</Link>
    </div>
   })
  return (
    <div className='grid grid-cols-6 gap-10 mt-20  justify-around '>
      {/* {prdtui} */}
      {prodtsui}
    </div>
  )
}
