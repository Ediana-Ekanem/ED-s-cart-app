import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const size = cart.length;

  return (
    <CartContext.Provider value={{ cart, setCart, warning, setWarning, size }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
