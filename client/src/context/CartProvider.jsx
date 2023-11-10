import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCard = (cartItem) => {
    setCartItems((prevCart) => [...prevCart, cartItem]);
  };

  return (
    <CartContext.Provider
      value={{
        addToCard,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
