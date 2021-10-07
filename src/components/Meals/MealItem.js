import React from "react";
import classes from "./MealItem.module.css";

const Mealitem = (props) => {
  const price = `€${props.price.toFixed(2)}`;

  return (
    <article className={classes.item}>
      <h3 className={classes.title}>{props.name}</h3>
      <img className={classes.img} src={props.image} alt={props.name} />
      <div className={classes.content}>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>{price}</p>
      </div>
    </article>
  );
};

export default Mealitem;
