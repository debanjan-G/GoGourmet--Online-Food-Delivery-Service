import CartIcon from "../Cart/CartIcon";
import styles from "./AddToCartButton.module.css";
import { useContext, useEffect, useState } from "react";
import CartContext from "../store/CartContext";

const AddToCartButton = (props) => {
  const handleClick = () => {
    props.onSendData(true);
  };

  const ctx = useContext(CartContext);
  const [showBtnAnimation, setShowBtnAnimation] = useState(false);
  const itemArray = ctx.items;
  useEffect(() => {
    if (itemArray.length === 0) {
      return;
    }
    const timerID = setTimeout(() => {
      setShowBtnAnimation(false);
    }, 300);
    setShowBtnAnimation(true);
    return () => {
      clearTimeout(timerID);
    };
  }, [itemArray]);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  const buttonStyles = `${styles.button} ${
    showBtnAnimation ? styles.bump : ""
  }`;

  return (
    <button className={buttonStyles} onClick={handleClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.text}>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default AddToCartButton;
