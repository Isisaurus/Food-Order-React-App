import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const Mealitem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <article className={classes.item}>
      <div className={classes["item-content"]}>
        <h3 className={classes.title}>{props.name}</h3>
        <img className={classes.img} src={props.image} alt={props.name} />
        <div className={classes.content}>
          <p className={classes.description}>{props.description}</p>
          <p className={classes.price}>{price}</p>
        </div>
      </div>
      <MealItemForm id={props.id} />
    </article>
  );
};

export default Mealitem;
