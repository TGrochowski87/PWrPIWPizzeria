import React from "react";

import DeleteIcon from "@material-ui/icons/Delete";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="left-side">
        <p>Nazwa, rozmiar</p>
        <div className="delete-button">
          <DeleteIcon />
          <p>Usuń</p>
        </div>
      </div>
      <h4>26.00 zł</h4>
    </div>
  );
};

export default CartItem;
