import styles from "./ItemImage.module.css";

const ItemImage = ({ item }) => {
  return (
    <div className={styles.item}>
      <figure className={styles.figure}>
        <img src={item.imgSrc} alt={item.itemName} className={styles.image} />
        <figcaption className={styles.figcaption}>{item.itemName}</figcaption>
      </figure>
    </div>
  );
};

export default ItemImage;
