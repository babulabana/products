// import React, { useEffect, useState } from 'react'
// import mdata from './mobiledata'
// import { Link } from 'react-router'
// export default function Mobiles() {
//     const [mobile,setmobile] = useState()

//     useEffect(()=>{
       
//         let md = mdata.map((p)=>{
//             return  <div className='flex flex-col h-64 w-64 gap-4'>
//             <img src={p.img} alt="" className='w-1/2 aspect-square' />
//             <div className='text-xl font-bold' >{p.name}</div>
//             <div><Link to={"/mobiledetails/"+p.id}>View Details</Link></div>
//         </div>
//         })
//         setmobile(md);

//     },[])
//   return (
//     <div>
//       {mobile}
//     </div>
//   )
// }
import React, { useContext, useEffect, useState } from 'react';
import mdata from './mobiledata';
import { Link } from 'react-router-dom'; // Corrected import for Link
import Rating from './Rating';
import { Usercontext } from '../context/Usercontext';
import Counter from './Counter';

export default function Mobiles() {
    const [mobile, setmobile] = useState([]);

    const User = useContext(Usercontext)
    useEffect(() => {
        // Map through the mobile data and create cards
        let md = mdata.map((p) => (
            <div key={p.id} className="flex flex-col items-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img src={p.img} alt={p.name} className="w-48 h-48 object-contain mb-4" />
                <Rating r={p.rating}></Rating>
                <div className="text-xl font-bold text-gray-900 text-center">{p.name}</div>
                <div className="mt-2 flex">
                    <Link
                        to={`/mobiledetails/${p.id}`}
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        View Details
                    </Link>
                    <Counter></Counter>
                </div>
               
            </div>
        ));
        setmobile(md);
        
    }, []);

    return (
    <>
    <h1  className='text-4xl font-bold'>welcome : {User.username}</h1>
    <h1>Email : {User.email}</h1>

        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Mobile Phones</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mobile}
                
            </div>
        </div>
     </>
    );
}

