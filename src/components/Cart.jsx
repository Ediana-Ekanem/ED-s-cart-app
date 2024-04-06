// // import React, { useState } from "react";

// const Cart = ({ item, handleCount, handleRemove }) => {
//   const [price, setPrice] = useState(0);
//   return (
//     <div className="flex items-center space-x-7 border-b border-gray-300 mb-5 pb-5">
//       <div className="w-40 h-20">
//         <img
//           src={item.img}
//           alt={item.id}
//           className="w-full h-full object-cover"
//         />
//       </div>
//       <p className="font-bold">{item.title}</p>
//       <div className="flex">
//         <button
//           className="border border-gray-300 text-xl py-1 px-3 rounded font-extrabold"
//           onClick={() => handleCount(item, +1)}
//         >
//           +
//         </button>
//         <button className="border border-gray-300 text-xl py-1 px-3 rounded font-semibold">
//           {item.amount}
//         </button>
//         <button
//           className="border border-gray-300 text-xl py-1 px-3 rounded font-extrabold"
//           onClick={() => handleCount(item, -1)}
//         >
//           -
//         </button>
//       </div>
//       <div className="flex flex-col items-center space-y-3">
//         <div>
//           <span className="bg-slate-500 text-white rounded px-2 py-1 font-semibold">
//             ${item.price},00
//           </span>
//         </div>
//         <button
//           className="rounded font-bold bg-red-500 py-1 px-3 text-white"
//           onClick={() => handleRemove(item.id)}
//         >
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
