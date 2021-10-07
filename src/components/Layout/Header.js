import React, { Fragment } from "react";
import banner from "./../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes.banner}>
        <img
          src={banner}
          alt="Pizzas on a table"
          className={classes["banner-img"]}
        />
      </div>
    </Fragment>
  );
};

export default Header;
