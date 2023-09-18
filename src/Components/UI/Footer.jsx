import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <p>© GoGourmet {currentYear}</p>
    </footer>
  );
};

export default Footer;
