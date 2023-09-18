import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import styles from "./Meals.module.css";

const Meals = () => {
  return (
    <Fragment>
      <h2 className={styles["order-heading"]}>Order Up!</h2>
      {/* <MealSummary /> */}
      <AvailableMeals />
    </Fragment>
  );
};

export default Meals;
