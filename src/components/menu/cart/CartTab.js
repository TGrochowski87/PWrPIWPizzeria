import React, { useState } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import CartItem from "./CartItem";

const CartTab = () => {
  const [active, setActive] = useState(false);

  return (
    <div className={`cart-space ${active ? "cart-active" : ""}`}>
      <div
        className="cart-button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <ShoppingCartIcon />
        <h5>125.00 zł</h5>
      </div>
      <div className="cart-panel">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default CartTab;
