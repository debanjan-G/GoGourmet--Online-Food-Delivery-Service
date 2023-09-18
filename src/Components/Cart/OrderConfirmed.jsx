import styles from "./OrderConfirmed.module.css";

const OrderConfirmed = () => {
  return (
    <div className={styles.container}>
      <h1>Order Confirmed</h1>
      <img
        className={styles["confirmed-logo"]}
        src="https://cdn.pixabay.com/photo/2015/06/09/16/12/icon-803718_1280.png"
        alt="order-confirmed-icon"
      />
      <p>We've Got Your Order – Get Ready to Feast!</p>
    </div>
  );
};

export default OrderConfirmed;
