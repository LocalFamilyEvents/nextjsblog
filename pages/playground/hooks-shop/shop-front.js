import { useContext, useEffect } from "react";

import ProductList from "./components/product-list";
import OrdersList from "./components/orders-list";
import Cart from "./components/cart";

import ShopContext from "./shop-context";

import styles from "./shop-front.module.css";

const ShopFront = () => {
  const { actions, cart, cartTotal, orderCount } = useContext(ShopContext);

  useEffect(() => {
    document.title = `Welcome to the shop (Cart Total = £${cartTotal})`;
  }, [cartTotal]);

  // function cartReducer(state : CartItem [], action : Action) {
  //     let newState;

  //     switch (action.type) {
  //         case 'addToCart':
  //             if(state.some((ci : CartItem) => ci.sku === action.payload.sku)) {
  //                 newState = state.map((ci : CartItem) => ci.sku === action.payload.sku ? {...ci, quantity: ci.quantity + 1} : ci);
  //             } else {
  //                 newState = [...state, action.payload];
  //             }
  //             break;
  //         case 'updateQuantity':
  //             const { sku, quantity } = action.payload;
  //             if(quantity === 0) {
  //                 newState = state.filter((ci : CartItem) => ci.sku !== sku);
  //             } else {
  //                 newState = state.map((ci : CartItem) => ci.sku === sku ? {...ci, quantity: quantity} : ci);
  //             }
  //             break;
  //         default:
  //             throw new Error(`action '${action.type}' not supported`);
  //     }
  //     return newState;
  // }

  // function ordersReducer(state : Order [], action : Action) {
  //     let newState;

  //     switch (action.type) {
  //         case 'placeOrder':
  //             var order = {
  //                 placed: new Date().toDateString(),
  //                 items: [...action.payload]
  //             };
  //             newState = [...state, order];
  //             break;
  //         default:
  //             throw new Error(`action '${action.type}' not supported`);
  //     }
  //     return newState;
  // }

  // const [cartItems, cartDispatch] = useReducer(cartReducer, []);
  // const [orders, orderDispatch] = useReducer(ordersReducer, []);

  // const totalCartItems = cartItems.reduce((total : number, item : CartItem) => total + item.quantity, 0);

  return (
    <>
      <div>
        Shop Front: Cart (Total &pound;{cartTotal} | Orders (orderCount)
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
