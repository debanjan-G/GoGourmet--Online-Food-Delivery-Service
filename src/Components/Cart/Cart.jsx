import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { useContext, useState } from "react";
import CartItem from "./CartItem";
import OrderConfirmed from "./OrderConfirmed";

const Cart = (props) => {
  const handleClose = () => {
    props.onSendData(false);
  };

  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const ctx = useContext(CartContext);
  const totalPrice = ctx.totalAmount.toFixed(2);

  const addToCartHandler = (item) => {
    item.quantity += 1;
    ctx.addItems({ ...item, quantity: 1 });
  };

  const removeFromCartHandler = (id) => {
    ctx.removeItem(id);
  };

  const handleOrder = () => {
    if (ctx.items.length !== 0) {
      setOrderConfirmed(true);
    }

    ctx.resetData();
  };

  return (
    <Modal onClick={handleClose}>
      {!orderConfirmed ? (
        <ul className={styles["cart-items"]}>
          {ctx.items.map((item) => (
            <CartItem
              item={item}
              key={item.id}
              onAdd={addToCartHandler}
              onRemove={removeFromCartHandler}
              price={item.price}
              amount={item.quantity}
              name={item.name}
            />
          ))}
        </ul>
      ) : (
        <OrderConfirmed />
      )}

      {!orderConfirmed && (
        <div className={styles.total}>
          <span>Total Amount</span>
          <span>{"₹" + totalPrice}</span>
        </div>
      )}
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={handleClose}>
          Close
        </button>
        {!orderConfirmed && (
          <button className={styles.button} onClick={handleOrder}>
            Order Now
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
