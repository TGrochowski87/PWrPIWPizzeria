import React, { useState, useContext } from "react";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Button } from "react-bootstrap";

import CartItem from "./CartItem";
import CartContext from "./CartContext";
import { auth, sendOrder } from "../../../utils/Firebase";

const CartTab = () => {
  const [active, setActive] = useState(false);

  const { content, setContent } = useContext(CartContext);

  const confirmOrder = () => {
    if (content.length === 0) {
      alert("Shopping cart is empty");
      return;
    }

    const sum = content
      .map((c) => c.price)
      .reduce((prev, curr) => {
        return prev + curr;
      });

    sendOrder(auth.currentUser, content, sum);
  };

  return (
    <div className={`cart-space ${active ? "cart-active" : ""}`}>
      <div
        className="cart-button"
        onClick={() => {
          setActive(!active);
        }}
      >
        <ShoppingCartIcon />
        <h5>{`${
          content.length > 0
            ? content
                .map((c) => c.price)
                .reduce((prev, curr) => {
                  return prev + curr;
                })
                .toFixed(2)
            : "00.00"
        } zł`}</h5>
      </div>
      <div className="cart-panel">
        <div className="list-space">
          {content.map((pizza) => (
            <CartItem key={pizza.id} pizza={pizza} />
          ))}
        </div>
        <div className="button-space">
          <Button variant="primary" onClick={confirmOrder}>
            Zatwierdź
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartTab;
