import styles from "./MealItemForm.module.css";
import Input from "../UI/Input";
import { useRef, useState } from "react";

const MealItemForm = (props) => {
  const [showInvalidInputMsg, setShowInvalidInputMsg] = useState(false);

  const quantityRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const enteredQuantity = quantityRef.current.value;
    const enteredQuantityNumber = +enteredQuantity;

    if (
      enteredQuantityNumber < 0 ||
      enteredQuantityNumber > 5 ||
      enteredQuantity.trim().length === 0
    ) {
      setShowInvalidInputMsg(true);
      return;
    }
    setShowInvalidInputMsg(false);
    props.onAddToCart(enteredQuantityNumber);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Input
        ref={quantityRef}
      
        input={{ type: "number", label: "Amount", min: 1, max: 10 }}
      />
      <button>+ Add</button>
      {showInvalidInputMsg && <p>Please enter a valid quantity between 1-5.</p>}
    </form>
  );
};

export default MealItemForm;
