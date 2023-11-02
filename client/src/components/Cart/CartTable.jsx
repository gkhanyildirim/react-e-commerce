import React from "react";
import CartItem from "./CartItem";

const CartTable = () => {
  return (
    <table classNameName="shop-table">
      <thead>
        <tr>
          <th classNameName="product-thumbnail">&nbsp;</th>
          <th classNameName="product-thumbnail">&nbsp;</th>
          <th classNameName="product-name">Product</th>
          <th classNameName="product-price">Price</th>
          <th classNameName="product-quantity">Quantity</th>
          <th classNameName="product-subtotal">Subtotal</th>
        </tr>
      </thead>
      <tbody classNameName="cart-wrapper">
        <CartItem />
        <CartItem />
      </tbody>
    </table>
  );
};

export default CartTable;
