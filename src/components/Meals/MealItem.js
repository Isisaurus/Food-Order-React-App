import React from "react";
import classes from "./MealItem.module.css";

const Mealitem = (props) => {
  const price = `${props.price.toFixed(2)}`;
  return (
    <li className={classes.item}>
      <article>
        <div className={classes.img} />
        <div className={classes.content}>
          <div>
            <h3 className={classes.title}>{props.name}</h3>
            <p className={classes.description}>{props.description}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
        </div>
      </article>
    </li>
  );
};

export default Mealitem;
