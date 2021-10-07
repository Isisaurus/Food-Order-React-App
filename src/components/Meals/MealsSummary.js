import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.title}>
        <h2>Delicious Food, delivered to your doorstep.</h2>
        <hr />
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae laborum
        cupiditate at architecto ducimus, accusamus temporibus odit quisquam
        facilis? Fugit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        beatae?
      </p>
    </section>
  );
};

export default MealsSummary;
