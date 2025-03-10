// import React, { useState } from "react";
// import { FaLeaf, FaDrumstickBite, FaPepperHot, FaFish } from "react-icons/fa";

// const menuItems = [
//   {
//     category: "Salads",
//     name: "Insalata Caprese",
//     description: "Mozzarella, tomato roundels, basil leaves, pesto, balsamic vinegar drizzle",
//     calories: 278,
//     price: 350,
//     vegetarian: true,
//     spicy: false,
//   },
//   {
//     category: "Soups",
//     name: "Minestrone",
//     description: "Tomato based vegetable soup with basil pesto & macaroni",
//     calories: 178,
//     price: 325,
//     vegetarian: true,
//     spicy: false,
//   },
//   {
//     category: "Starters",
//     name: "Pesce Trifolati",
//     description: "Dices of fish sautéed with Italian herbs and garlic served with garlic bread",
//     calories: 654,
//     price: 450,
//     vegetarian: false,
//     spicy: false,
//   },
// ];

// const Menu = () => {
//   const [category, setCategory] = useState("All");

//   const filteredItems = category === "All" ? menuItems : menuItems.filter(item => item.category === category);

//   return (
//     <div className="p-6 max-w-4xl mx-auto">
//       <h1 className="text-3xl font-bold text-center mb-6">Restaurant Menu</h1>
      
//       <div className="flex gap-4 justify-center mb-6">
//         {["All", "Salads", "Soups", "Starters"].map((cat) => (
//           <button
//             key={cat}
//             className={`px-4 py-2 rounded ${category === cat ? "bg-blue-500 text-white" : "bg-gray-200"}`}
//             onClick={() => setCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>
      
//       <div className="grid gap-4">
//         {filteredItems.map((item, index) => (
//           <div key={index} className="p-4 border rounded shadow">
//             <h2 className="text-xl font-semibold">{item.name}</h2>
//             <p className="text-gray-600">{item.description}</p>
//             <div className="flex items-center gap-2 mt-2">
//               {item.vegetarian && <FaLeaf className="text-green-500" title="Vegetarian" />}
//               {!item.vegetarian && <FaDrumstickBite className="text-red-500" title="Non-Vegetarian" />}
//               {item.spicy && <FaPepperHot className="text-yellow-500" title="Spicy" />}
//             </div>
//             <div className="flex justify-between items-center mt-2">
//               <span className="text-gray-700">{item.calories} kcal</span>
//               <span className="font-bold">₹{item.price}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;
