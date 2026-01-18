import React from "react";

function CartSummary({ cart, total, onCheckOut }) {
  return (
    <div className="cart-summary card">
      <div className="card-info">
        <div className="cart-count">Nb of items in cart : {cart}</div>
        <div className="cart-total">total price : {total}</div>
      </div>
      <button className="button button-primary" onClick={onCheckOut}>
        CheckOut
      </button>
    </div>
  );
}

export default CartSummary;
