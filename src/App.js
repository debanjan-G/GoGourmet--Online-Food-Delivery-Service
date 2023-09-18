import { useState } from "react";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartContextProvider from "./Components/store/CartConextProvider";
import Menu from "./Components/Menu/Menu";

function App() {
  const [showCart, setShowCart] = useState(false);
  const getData = (data) => {
    setShowCart(data);
  };
  return (
    <CartContextProvider>
      {showCart && <Cart onSendData={getData} />}
      <Header onSendData={getData} />
      <Menu />
      <Meals />

      <Footer />
    </CartContextProvider>
  );
}

export default App;
