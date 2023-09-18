import { useReducer } from "react";
import CartContext from "./CartContext";

const initialState = {
  items: [],
  totalAmount: 0,
};

const reducerFn = (state, action) => {
  if (action.type === "ADD") {
    const updatedAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (element) => action.item.id === element.id
    );
    const existingItem = state.items[existingItemIndex];
    let updatedItems;
    let updatedItem;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount,
    };
  } else if (action.type === "REMOVE") {
    const indexOfItemToBeDeleted = state.items.findIndex(
      (item) => item.id === action.id
    );
    const itemToBeDeleted = state.items[indexOfItemToBeDeleted];
    const updatedTotalAmount = state.totalAmount - itemToBeDeleted.price;
    let updatedItem;
    let updatedItems;

    if (itemToBeDeleted.quantity === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...itemToBeDeleted,
        quantity: itemToBeDeleted.quantity - 1,
      };
      updatedItems = [...state.items];
      updatedItems[indexOfItemToBeDeleted] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "RESET") {
    return initialState;
  }
  return state;
};

const CartContextProvider = (props) => {
  const [state, dispatchFn] = useReducer(reducerFn, initialState);

  const addItemHandler = (itemData) => {
    dispatchFn({ type: "ADD", item: itemData });
  };

  const removeItemHandler = (identity) => {
    dispatchFn({ type: "REMOVE", id: identity });
  };

  const resetContextData = () => {
    dispatchFn({ type: "RESET" });
  };

  const cartContext = {
    items: state.items,
    totalAmount: state.totalAmount,
    addItems: addItemHandler,
    removeItem: removeItemHandler,
    resetData: resetContextData,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
