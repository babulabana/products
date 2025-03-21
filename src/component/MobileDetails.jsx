// // import React, { useRef, useState } from 'react'
// // import mdata from './mobiledata'
// // import { useParams } from 'react-router'

// // export default function MobileDetails() {
// //     let params = useParams()
// //     let pid = params.pid
// //     const [mobileinfo,setmobileinfo]= useState(mdata.find((p)=>p.id==pid))
// //     let imgref = useRef()
// //   return (
// //     <div>
// //       <div>
// //             <div>
// //                {mobileinfo.additionalImages.map((i)=>{
// //                 return <img src={i} onClick={()=>imgref.current.src = i} alt="" className='border-1 h-16 w-16' />
// //                })} 
// //             </div>
// //             <div>
// //             <img src={mobileinfo.img}  ref={imgref}
// //                      className="border-1 h-full w-64" alt="" />
// //             </div>

// //       </div>
// //       <div>

// //     id: 1,
// //     img: nokia,
// //     name: "Nokia 1600",
// //     company: "Nokia",
// //     price: "1250",
// //     brand: "Nokia",
// //     modelno: "1600",
// //     title: "All Around Protection Case",
// //     coloroptions: ["Red", "Blue", "Grey"],
// //     originalprice: "1250",
// //     discountedprice: "1150",
// //     modelseries: "Nokia Series",
// //     weight: "150g",
// //     dimensions: "10x5x0.5 cm",
// //     type: "Leather Case",
// //     keyfeatures: [
// //       "All around protection",
// //       "PU leather material",
// //       "Raised edges for screen safety",
// //     ],
// //     des: "All Around protection: PU leather case wraps around the whole phone for all around protection. Covers all four sides and includes raised edges to keep the screen safe.",
// //     rating: 4,
// //       </div>
// //     </div>
// //   )
// // }
// import React, { useRef, useState } from 'react';
// import mdata from './mobiledata';
// import { useParams } from 'react-router';

// export default function MobileDetails() {
//     let params = useParams();
//     let pid = params.pid;
//     const [mobileinfo, setmobileinfo] = useState(mdata.find((p) => p.id == pid));
//     let imgref = useRef();

//     return (
//         <div className="container mx-auto p-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 {/* Image Gallery */}
//                 <div className="flex flex-col md:flex-row gap-4">
//                     <div className="flex flex-row md:flex-col gap-2">
//                         {mobileinfo.additionalImages.map((i, index) => (
//                             <img
//                                 key={index}
//                                 src={i}
//                                 onClick={() => (imgref.current.src = i)}
//                                 alt=""
//                                 className="border-1 h-16 w-16 cursor-pointer"
//                             />
//                         ))}
//                     </div>
//                     <div>
//                         <img
//                             src={mobileinfo.img}
//                             ref={imgref}
//                             className="border-1 h-full w-64"
//                             alt=""
//                         />
//                     </div>
//                 </div>

//                 {/* Product Details */}
//                 <div className="space-y-4">
//                     <h1 className="text-2xl font-bold">{mobileinfo.name}</h1>
//                     <p className="text-gray-600">{mobileinfo.company}</p>
//                     <p className="text-lg font-semibold">Price: ₹{mobileinfo.price}</p>
//                     <p className="text-sm text-gray-500">Original Price: ₹{mobileinfo.originalprice}</p>
//                     <p className="text-sm text-green-600">Discounted Price: ₹{mobileinfo.discountedprice}</p>

//                     <div className="space-y-2">
//                         <p className="text-sm"><strong>Brand:</strong> {mobileinfo.brand}</p>
//                         <p className="text-sm"><strong>Model No:</strong> {mobileinfo.modelno}</p>
//                         <p className="text-sm"><strong>Model Series:</strong> {mobileinfo.modelseries}</p>
//                         <p className="text-sm"><strong>Weight:</strong> {mobileinfo.weight}</p>
//                         <p className="text-sm"><strong>Dimensions:</strong> {mobileinfo.dimensions}</p>
//                         <p className="text-sm"><strong>Type:</strong> {mobileinfo.type}</p>
//                         <p className="text-sm"><strong>Color Options:</strong> {mobileinfo.coloroptions.join(', ')}</p>
//                     </div>

//                     <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Key Features</h2>
//                         <ul className="list-disc list-inside">
//                             {mobileinfo.keyfeatures.map((feature, index) => (
//                                 <li key={index} className="text-sm">{feature}</li>
//                             ))}
//                         </ul>
//                     </div>

//                     <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Description</h2>
//                         <p className="text-sm">{mobileinfo.des}</p>
//                     </div>

//                     <div className="space-y-2">
//                         <h2 className="text-xl font-semibold">Rating</h2>
//                         <p className="text-sm">{mobileinfo.rating} / 5</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useRef, useState } from 'react';
import mdata from './mobiledata';
import { useParams } from 'react-router';
import Rating from './Rating';

export default function MobileDetails() {
    let params = useParams();
    let pid = params.pid;
    const [mobileinfo, setmobileinfo] = useState(mdata.find((p) => p.id == pid));
    let imgref = useRef();

    return (
        <>
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Image Gallery */}
                <div className="flex flex-col md:flex-row gap-4">
                    {/* Thumbnails */}
                    <div className="flex flex-row md:flex-col gap-2 order-2 md:order-1">
                        {mobileinfo.additionalImages.map((i, index) => (
                            <img
                                key={index}
                                src={i}
                                onClick={() => (imgref.current.src = i)}
                                alt=""
                                className="border-1 h-16 w-16 cursor-pointer hover:opacity-75 transition-opacity"
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="order-1 md:order-2">
                        <img
                            src={mobileinfo.img}
                            ref={imgref}
                            className="border-1 h-auto w-full max-w-md rounded-lg shadow-lg"
                            alt=""
                        />
                    </div>
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold text-gray-900">{mobileinfo.name}</h1>
                    <p className="text-lg text-gray-600">{mobileinfo.company}</p>

                    {/* Price Section */}
                    <div className="space-y-2">
                        <p className="text-2xl font-semibold text-gray-900">₹{mobileinfo.price}</p>
                        <p className="text-sm text-gray-500 line-through">Original Price: ₹{mobileinfo.originalprice}</p>
                        <p className="text-sm text-green-600 font-medium">Discounted Price: ₹{mobileinfo.discountedprice}</p>
                    </div>

                    {/* Product Specifications */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Specifications</h2>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                            <p><strong>Brand:</strong> {mobileinfo.brand}</p>
                            <p><strong>Model No:</strong> {mobileinfo.modelno}</p>
                            <p><strong>Model Series:</strong> {mobileinfo.modelseries}</p>
                            <p><strong>Weight:</strong> {mobileinfo.weight}</p>
                            <p><strong>Dimensions:</strong> {mobileinfo.dimensions}</p>
                            <p><strong>Type:</strong> {mobileinfo.type}</p>
                            <p><strong>Color Options:</strong> {mobileinfo.coloroptions.join(', ')}</p>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2 text-sm text-gray-700">
                            {mobileinfo.keyfeatures.map((feature, index) => (
                                <li key={index} className="ml-4">{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Description */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Description</h2>
                        <p className="text-sm text-gray-700">{mobileinfo.des}</p>
                    </div>

                    {/* Rating */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-gray-900">Rating</h2>
                        <p className="text-sm text-gray-700">{mobileinfo.rating} / 5 <Rating r={mobileinfo.rating}></Rating></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
