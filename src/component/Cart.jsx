// // import React, { useContext } from 'react'
// // import { Cartcontext } from '../context/Cartcontext'

// // export default function Cart() {
// //     let Cart = useContext(Cartcontext)
// //   return (
// //     <div>
// //       Cart : {JSON.stringify(Cart.items)}
// //     </div>
// //   )
// // }





import React, { useContext } from 'react';
import { Cartcontext } from '../context/Cartcontext';

export default function Cart() {
  const { items } = useContext(Cartcontext);

  // Calculate the total price of all items
  const totalPrice = items.reduce((acc, item) => acc + parseFloat(item.price) * item.qty, 0);

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Shopping Cart</h1>
        {items.length === 0 ? (
          <p className="text-center text-xl text-gray-600">Your cart is empty!</p>
        ) : (
          <div className="overflow-x-auto bg-white shadow-md rounded-lg">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-200 text-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left font-semibold text-sm">Serial No.</th> {/* Added Serial No. column */}
                  <th className="px-6 py-3 text-left font-semibold text-sm">Product</th>
                  <th className="px-6 py-3 text-left font-semibold text-sm">Price</th>
                  <th className="px-6 py-3 text-left font-semibold text-sm">Quantity</th>
                  <th className="px-6 py-3 text-left font-semibold text-sm">Total</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                {items.map((item, index) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td> {/* Serial number */}
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4">₹{parseFloat(item.price).toLocaleString()}</td>
                    <td className="px-6 py-4">{item.qty}</td>
                    <td className="px-6 py-4">₹{(parseFloat(item.price) * item.qty).toLocaleString()}</td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td colSpan="4" className="px-6 py-4 text-right">Total Price</td>
                  <td className="px-6 py-4">₹{totalPrice.toLocaleString()}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}







