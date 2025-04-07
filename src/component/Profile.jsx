// import React from 'react'

// export default function Profile() {
//   return (
//     <div>
//       <p>
//          <label >Name : </label>
//          <input type="text" placeholder='Enter your name ' />
//       </p>
//       <p>
//          <label >Email : </label>
//          <input type="email" placeholder='Enter your Email id' />
//       </p>
//       <p>
//          <label >Contact No. : </label>
//          <input type="number" placeholder='Enter your contact no. ' />
//       </p>
//       <p>
//          <label >Gender : </label>
//          <select name="gender" id="">
//           <option value="man">MAN</option>
//           <option value="woman">WOMAN</option>
//          </select>
//       </p>

//     </div>
//   )
// }


import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6 text-center">Profile Form</h2>

      <form>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Email:</label>
          <input 
            type="email" 
            placeholder="Enter your Email id" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Contact No.:</label>
          <input 
            type="number" 
            placeholder="Enter your contact no." 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">Gender:</label>
          <select 
            name="gender" 
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="man">MAN</option>
            <option value="woman">WOMAN</option>
          </select>
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
