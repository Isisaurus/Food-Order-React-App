import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    image:
      "https://images.pexels.com/photos/7243421/pexels-photo-7243421.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    image:
      "https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    image:
      "https://images.pexels.com/photos/9467486/pexels-photo-9467486.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    image:
      "https://images.pexels.com/photos/5514819/pexels-photo-5514819.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal, i) => (
    <MealItem
      key={meal.id}
      name={meal.name}
      price={meal.price}
      description={meal.description}
      image={meal.image}
    />
  ));
  return (
    <section className={classes.section}>
      <Card>{mealsList}</Card>
    </section>
  );
};

export default AvailableMeals;
