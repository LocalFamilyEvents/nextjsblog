/* eslint no-unused-vars: 0 */
import React, {createContext, useCallback, useEffect, useMemo, useState} from "react";

import productData from "./product-data";

const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const [products] = useState(productData);

    const [cart, setCart] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    const [orders, setOrders] = useState([]);
    const [orderCount, setOrderCount] = useState(0);

    const addProductToCart = useCallback(
        (itemToAdd) => {
            const itemInCart = cart.filter((ci) => ci.sku === itemToAdd.sku);
            let newCart;

            if (itemInCart.length > 0) {
                newCart = cart.map((ci) => ci.sku === itemToAdd.sku ? {...ci, quantity: ci.quantity + 1} : ci);
            } else {
                newCart = cart.concat(itemToAdd);
            }

            setCart(newCart);
        },
        [cart]
    );

    const updateCartItemQuantity = useCallback(
        (sku, newQuantity) => {
            let newCart;

            if (newQuantity === 0) {
                newCart = cart.filter((ci) => ci.sku !== sku);
            } else {
                newCart = cart.map((ci) => ci.sku === sku ? {...ci, quantity: newQuantity} : ci);
            }

            setCart(newCart);
        },
        [cart]
    );

    const clearCart = useCallback(
        () => {
            setCart([]);
        },
        [cart]
    );

    const placeOrder = useCallback(
        (order) => {
            setOrders(orders.concat(order));
            clearCart();
        },
        [orders]
    );

    useEffect(() => {
        let cartItemTotal = cart.reduce(
            (total, cartItem) => total + (cartItem.price * cartItem.quantity),
            0
        );

        setCartTotal(cartItemTotal);
    }, [cart]);

    useEffect(() => {
        setOrderCount(orders.length);
    }, [cart]);

    const providerValue = useMemo(
        () => ({
            products,
            cart,
            cartTotal,
            orderCount,
            orders,
            actions: {
                addProductToCart,
                updateCartItemQuantity,
                placeOrder,
            }
        }),
        [
            products,
            cart,
            cartTotal,
            orderCount,
            orders,
            addProductToCart,
            updateCartItemQuantity,
            placeOrder
        ]
    );

    return (
        <ShopContext.Provider value={providerValue}>{props.children}</ShopContext.Provider>
    );
};
export default ShopContext;
