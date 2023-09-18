import style from "./Header.module.css";
import mealImage from "../../Assets/GettyRF_599272840.jpeg";
import AddToCartButton from "../Cart/AddToCartButton";

import { Fragment } from "react";

const Header = (props) => {
  return (
    <Fragment>
      <header className={style.header}>
        <h1>GoGourmet</h1>
        <AddToCartButton onSendData={props.onSendData} />
      </header>
      <div className={style["main-image"]}>
        <img src={mealImage} alt="Delicious Food items!" className="main-img" />
      </div>
    </Fragment>
  );
};

export default Header;
