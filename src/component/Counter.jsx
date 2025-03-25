import { useContext, useState } from "react"
import { Cartcontext } from "../context/Cartcontext";
import mdata from "./mobiledata";
import { useParams } from "react-router";
export default function Counter(){
    let params = useParams();
    let pid = params.pid;
  const Cart = useContext(Cartcontext)

    const [count,setcount] = useState(0)
    const [mobileinfo, setmobileinfo] = useState(mdata.find((p) => p.id == pid));
    console.log(mobileinfo)
    // let addtocart=()=>{
 
    //     let index = Cart.items.findIndex((p)=>p.id==pid);
    //     console.log(index)
    //     if(index<0){
    //         Cart.items.push({id:mobileinfo.id,itemname:mobileinfo.name,price:mobileinfo.price,qty:1})
    //     }
    //     else{
    //         Cart.items[index].qty= Cart.items[index].qty+1
    //     }
    // }
  


    var d =0;
    let increment=()=>{
        // d=count;
        // d++;     
        // setcount(d);
        let index = Cart.items.findIndex((p)=>p.id==pid);
        console.log(index)
        if(index<0){
            Cart.items.push({id:mobileinfo.id,itemname:mobileinfo.name,price:mobileinfo.price,qty:1})
        }
        else{
            Cart.items[index].qty= Cart.items[index].qty+1
        }
             
        setcount(Cart.items[index].qty);
    }
    let decrement=()=>{
        let index = Cart.items.findIndex((p)=>p.id==pid);
        console.log(index)
        if(index<0){
            Cart.items.push({id:mobileinfo.id,itemname:mobileinfo.name,price:mobileinfo.price,qty:1})
        }
        else{
            Cart.items[index].qty= Cart.items[index].qty-1
        }
        
       
        setcount(Cart.items[index].qty);
    }
    let u = <div className="flex  justify-center items-center gap-5 ">
    {count>0?<input type="button" value="-" className="px-2 m-2 bg-red-400 text-2xl text-white " onClick={()=>decrement()} />:<input type="button" value="-" className="px-2 m-2 bg-red-600 text-2xl text-white " disabled />}
          <div className="text-3xl"> {count}</div>
    {count<5?<input type="button" value="+" className="px-2 m-2 bg-red-400 text-2xl text-white " onClick={()=>increment()} />:<input type="button" value="+" className="px-2 m-2  bg-red-600 text-2xl text-white " disabled />}
    
    </div>
    return(

        <>
              {count == 0 ? <input type="button" value="Add to cart"  className="bg-red-400  rounded-2xl p-3" onClick={increment}></input> : u}
        </>
        
    )
}

// import { useContext, useState, useEffect } from "react";
// import { Cartcontext } from "../context/Cartcontext";
// import mdata from "./mobiledata";
// import { useParams } from "react-router";

// export default function Counter() {
//   let params = useParams();
//   let pid = params.pid;
//   const Cart = useContext(Cartcontext);

//   const [count, setCount] = useState(0);
//   const [mobileinfo, setMobileInfo] = useState(mdata.find((p) => p.id == pid));

//   // Ensure Cart.items is always initialized as an empty array
//   useEffect(() => {
//     if (!Cart.items) {
//       Cart.items = []; // Initialize Cart.items if it's undefined
//     }

//     // Set the initial count based on Cart.items if product is already in cart
//     const existingItem = Cart.items.find((p) => p.id === pid);
//     if (existingItem) {
//       setCount(existingItem.qty);
//     }
//   }, [Cart.items, pid]);

//   const addToCart = () => {
//     let index = Cart.items.findIndex((p) => p.id === pid);
//     if (index < 0) {
//       Cart.items.push({
//         id: mobileinfo.id,
//         itemname: mobileinfo.name,
//         price: mobileinfo.price,
//         qty: 1,
//       });
//       setCount(1);
//     } else {
//       Cart.items[index].qty = Cart.items[index].qty + 1;
//       setCount(Cart.items[index].qty);
//     }
//   };

//   const increment = () => {
//     let index = Cart.items.findIndex((p) => p.id === pid);
//     if (index < 0) {
//       Cart.items.push({
//         id: mobileinfo.id,
//         itemname: mobileinfo.name,
//         price: mobileinfo.price,
//         qty: 1,
//       });
//       setCount(1);
//     } else {
//       Cart.items[index].qty = Cart.items[index].qty + 1;
//       setCount(Cart.items[index].qty);
//     }
//   };

//   const decrement = () => {
//     let index = Cart.items.findIndex((p) => p.id === pid);
//     if (index >= 0 && Cart.items[index].qty > 1) {
//       Cart.items[index].qty = Cart.items[index].qty - 1;
//       setCount(Cart.items[index].qty);
//     } else if (index >= 0 && Cart.items[index].qty === 1) {
//       Cart.items.splice(index, 1); // Remove item if qty is 1 and the user decrements
//       setCount(0);
//     }
//   };

//   const button = (
//     <div className="flex justify-center items-center gap-5">
//       {count > 0 ? (
//         <input
//           type="button"
//           value="-"
//           className="px-2 m-2 bg-red-400 text-2xl text-white"
//           onClick={decrement}
//         />
//       ) : (
//         <input
//           type="button"
//           value="-"
//           className="px-2 m-2 bg-red-600 text-2xl text-white"
//           disabled
//         />
//       )}
//       <div className="text-3xl">{count}</div>
//       {count < 5 ? (
//         <input
//           type="button"
//           value="+"
//           className="px-2 m-2 bg-red-400 text-2xl text-white"
//           onClick={increment}
//         />
//       ) : (
//         <input
//           type="button"
//           value="+"
//           className="px-2 m-2 bg-red-600 text-2xl text-white"
//           disabled
//         />
//       )}
//     </div>
//   );

//   return (
//     <>
//       {count === 0 ? (
//         <input
//           type="button"
//           value="Add to cart"
//           className="bg-red-400 rounded-2xl p-3"
//           onClick={addToCart}
//         />
//       ) : (
//         button
//       )}
//     </>
//   );
// }
