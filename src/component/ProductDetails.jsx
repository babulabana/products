// import React, { useEffect, useState } from 'react'
//  import { useParams } from 'react-router'
// import {prdts, prodts} from './Productdata';
// //  import prdts from './productsdata';
 
//  export default function ProductDetails() {
//      let params = useParams()
//      let pid = params.pid;
//      const [product,setproduct] = useState({})
//      const [product2,setproduct2] = useState({})
//     //  useEffect(()=>
//     //  {
//     //  var  p = prdts.find((p)=>p.id==pid);
//     //      setproduct(p)
//     //  },[])
//      useEffect(()=>
//       {
//       var  p = prodts.find((p)=>p._id==pid);
//           setproduct2(p)
//       },[])

//      //  "_id": 20,
//   //     "title": "Formal for Men",
//   //     "isNew": false,
//   //     "oldPrice": "500",
//   //     "price": 490,
//   //     "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non magni facili blanditiis molestias soluta eveniet illum accusantium eius mollitia eligendi, ex iste doloribus magnam.",
//   //     "category": "women",
//   //     "image": "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
//   //     "rating": 5
//    return (
//      <>
//     <div className='flex  mt-20   border-2 border-amber-300 bg-yellow-100'>
//         <div><img src={product2.img} className='aspect-square' alt="" /></div>
//         <div><p>{product2.title}</p>
//         <p>{product2.category}</p>
//         <p>price {product2.price}</p>
//         <p>oldPrice {product2.oldPrice}</p>
//         <p>{product2.description}</p>
//         <p>{product2.rating}</p></div>
       
//     </div>
//      {/* <div className="max-w-6xl mx-auto mt-16 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row">
//      <img
//        src={product.img}
//        alt="Product"
//        className="w-full md:w-1/3 h-64"
//      />
//      <div className="p-6 flex flex-col justify-center">
//        <h3 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h3>
//        <p className="text-gray-600 mb-1">{product.company}</p>
//        <p className="text-xl font-semibold text-green-600 mb-3">{product.price}</p>
//        <p className="text-gray-700">
//        {product.des}
//        </p>
//      </div>
//    </div> */}
//    </>
//    )
//  }

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { prodts } from './Productdata';

export default function ProductDetails() {
    let params = useParams();
    let pid = params.pid;
    const [product, setProduct] = useState({});

    useEffect(() => {
        const p = prodts.find((p) => p._id == pid);
        setProduct(p);
    }, [pid]);

    return (
        <div className="min-h-screen bg-gray-100 py-8">
            <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="md:flex">
                    <div className="md:flex-shrink-0">
                        <img
                            src={product.img}
                            alt={product.title}
                            className="w-full h-64 md:h-auto md:w-96 object-cover"
                        />
                    </div>
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.title}</h1>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Category:</span> {product.category}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Price:</span> {product.price}
                        </p>
                        <p className="text-gray-600 mb-2">
                            <span className="font-semibold">Old Price:</span> {product.oldPrice}
                        </p>
                        <p className="text-gray-600 mb-4">
                            <span className="font-semibold">Rating:</span> {product.rating}/5
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>
                        {/* <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
                            Add to Cart
                        </button> */}
                    </div>
                </div>
            </div>
        </div>
    );
}