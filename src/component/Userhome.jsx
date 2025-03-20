// import React from 'react'
// import Products from './Products'
// import { Link } from 'react-router';

// export default function Userhome(props) {
//     let userlogin = props.userlogin;
//     // let setuserlogin = props.setuserlogin
//     let d = {userlogin:userlogin}
    

//   return (
//     <div>
//        <nav>
//         {/* <Products userlogin={userlogin} ></Products> */}
//         <li><Link to="/products" state={d}>products</Link></li>
//         <li><Link to="/mobiles" state={d}>Mobiles</Link></li>
//         <li>cart</li>
//         <li>your orders</li>
//         <li>profile</li>

//        </nav>
//     </div>
//   )
// }

import React from 'react';
import { Link } from 'react-router-dom'; // Corrected import for Link

export default function Userhome(props) {
    let userlogin = props.userlogin;
    let d = { userlogin: userlogin };

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Navigation Bar */}
            <nav className="bg-white shadow-lg">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        {/* Logo or Brand Name */}
                        <div className="text-2xl font-bold text-gray-800">
                            My App
                        </div>

                        {/* Navigation Links */}
                        <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 mt-4 md:mt-0">
                            <li>
                                <Link
                                    to="/products"
                                    state={d}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/mobiles"
                                    state={d}
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Mobiles
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/orders"
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Your Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/profile"
                                    className="text-gray-700 hover:text-blue-600 transition-colors"
                                >
                                    Profile
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Welcome to Your Dashboard</h1>
                <p className="text-gray-700">Explore the features using the navigation above.</p>
            </div>
        </div>
    );
}

