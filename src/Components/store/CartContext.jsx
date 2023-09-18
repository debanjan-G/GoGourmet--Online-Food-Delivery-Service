import { createContext } from "react";

const CartContext = createContext({
  items: [],
  amount: 0,
  addItems: (item) => {

  },
  removeItems: (id) => {},
});

export default CartContext;
