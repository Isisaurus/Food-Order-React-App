import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import MealsSummary from "./../Meals/MealsSummary";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowCart={props.onShowCart} />
      </header>
      <div className={classes.banner}>
        <MealsSummary />
        <div className={classes["banner-img"]}></div>
      </div>
    </Fragment>
  );
};

export default Header;
