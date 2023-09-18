import styles from "./MealSummary.module.css";

const MealSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>Your favorite food, at your fingertips.</h2>
      <p>
        Making it easy to order your favorite food with just a few taps on your
        phone with a wide variety of restaurants to choose from. And our
        delivery is fast and reliable, so you can enjoy your food as soon as
        possible.
      </p>
      <p>
        All our meals are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default MealSummary;
