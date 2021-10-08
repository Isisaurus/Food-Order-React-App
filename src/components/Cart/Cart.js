import React from "react";
import classes from "./Cart.module.css";

const Cart = () => {
  const itemsArr = [{ id: "c1", name: "sushi", amount: 2, price: "12.99" }];
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {itemsArr.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["btn--alt"]}>Close</button>
        <button className={classes.order}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
