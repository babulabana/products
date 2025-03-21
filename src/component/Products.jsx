// import React, { useEffect } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router'
// // import {prdts} from './Productdata'
// import {prodts} from "./Productdata"
// export default function Products(props) {
//     // let userlogin ="sdf"
//     // console.log(prodts)
//     const location = useLocation()
//     const navigate = useNavigate()
//     useEffect(()=>
//     {
//         if(location.state!=null)
//         {
//             console.log("contionye on this page")
//         }
//         else
//         {
//             console.log("sent back to login")
//             navigate("/homewithlogin")
//         }
//     })


//   //  let prdtui = prdts.map((p)=>{
//   //   return <div className=' w-40  text-center  border-2 border-amber-300 bg-yellow-100'>
//   //       <img src={p.img}  className='aspect-square'  alt="" />
//   //       <p>{p.name}</p>
//   //       <p>{p.company}</p>
//   //       <p>{p.price}</p>
//   //       <Link to={`/productdetails/${p.id}`}>view more</Link>
//   //   </div>
//   //  })
//   //  "_id": 20,
//   //     "title": "Formal for Men",
//   //     "isNew": false,
//   //     "oldPrice": "500",
//   //     "price": 490,
//   //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//   //     "category": "women",
//   //     "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     "rating": 5
//   let prodtsui = prodts.map((p)=>{
//     return <div className=' w-40   text-center  border-2 border-amber-300 bg-yellow-100'>
//         <img src={p.img} className='aspect-square' alt="" />
//         <p>{p.title}</p>
//         <p>{p.category}</p>
//         <p>price {p.price}</p>
//         <p>oldPrice {p.oldPrice}</p>
        
//         <p>{p.rating}</p>
//         <Link to={`/productdetails/${p._id}`}>view more</Link>
//     </div>
//    })
//   return (
//     <div className='grid grid-cols-6 gap-10 mt-20  justify-around '>
//       {/* {prdtui} */}
//       {prodtsui}
//     </div>
//   )
// }
import React, { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Corrected import for Link
import { prodts } from './Productdata';
import Rating from './Rating';
export default function Products(props) {
    const location = useLocation();
    const navigate = useNavigate();

    // Check if the user is logged in
    useEffect(() => {
        if (location.state == null) {
            console.log('Sent back to login');
            navigate('/homewithlogin');
        }
    }, [location, navigate]);

    // Map through the products and create cards
    let prodtsui = prodts.map((p) => (
        <div
            key={p._id}
            className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white"
        >
            <img src={p.img} alt={p.title} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600">{p.category}</p>
                <div className="mt-2">
                    <p className="text-lg font-bold text-gray-900">₹{p.price}</p>
                    <p className="text-sm text-gray-500 line-through">₹{p.oldPrice}</p>
                </div>

                <p className="text-sm text-yellow-600">Rating: {p.rating} / 5 <Rating r={p.rating}></Rating></p>
                <Link
                    to={`/productdetails/${p._id}`}
                    className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    View Details
                </Link>
            </div>
        </div>
    ));

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {prodtsui}
            </div>
        </div>
    );
}
