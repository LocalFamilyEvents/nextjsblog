import { useContext, useEffect } from "react";

import ProductList from "./components/product-list";
import OrdersList from "./components/orders-list";
import Cart from "./components/cart";

import ShopContext from "./context";

import styles from "./shop-front.module.css";

const ShopFront = () => {
  const { actions, cart, cartTotal, orderCount } = useContext(ShopContext);

  useEffect(() => {
    document.title = `Welcome to the shop (Cart Total = £${cartTotal})`;
  }, [cartTotal]);

  return (
    <>
      <div>
        Shop Front: Cart (Total &pound;{cartTotal} | Orders ({orderCount})
      </div>
      <div className={styles.container}>
        <ProductList />
        <Cart />
      </div>
      <div><OrdersList /></div>
    </>
  );
};

export default ShopFront;
