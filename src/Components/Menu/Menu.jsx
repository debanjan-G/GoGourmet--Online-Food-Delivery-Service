import styles from "./Menu.module.css";
import Todays_Menu from "../../Assets/Todays_Menu";
import ItemImage from "./ItemImage";
import MealSummary from "../Meals/MealSummary";

const Menu = () => {
  return (
    // <Card>
    <div className={styles.container}>
      <MealSummary />
      <header>
        <h1 className={styles["section-title"]}>Gourmet Gallery</h1>
      </header>
      {Todays_Menu.map((item) => (
        <ItemImage item={item} key={item.id} />
      ))}
    </div>
    // {/* </Card> */}
  );
};

export default Menu;
