import { useEffect, useReducer, useState, StrictMode } from "react";
import Layout from "../../components/layout";
import ProductList from "./product-list";
import Cart from "./cart";

import styles from './hooksdemoshop.module.css';

const UseEffect = () => {

    const products = [
        {
            sku: 1,
            title: 'Product 1',
            price: 9.99
        },
        {
            sku: 2,
            title: 'Product 2',
            price: 123.22
        }
    ];

    function cartReducer(state, action) {
        let newState;

        switch (action.type) {
            case 'addToCart':
                if(state.some((ci) => ci.sku === action.payload.sku)) {
                    newState = state.map((ci) => ci.sku === action.payload.sku ? {...ci, quantity: ci.quantity + 1} : ci);
                } else {
                    newState = [...state, action.payload];
                }
                break;
            case 'updateQuantity':
                const { sku, quantity } = action.payload;
                if(quantity === 0) {
                    newState = state.filter((ci) => ci.sku !== sku);
                } else {
                    newState = state.map((ci) => ci.sku === sku ? {...ci, quantity: quantity} : ci);
                }
                break;
            default:
                throw new Error(`action '${action.type}' not supported`);
        }
        return newState;
    }

    const [cartItems, dispatch] = useReducer(cartReducer, []);
    const [orders, setOrders] = useState([]);
    const totalCartItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    useEffect(() => {
        document.title = `Welcome to the shop (${cartItems.length}, ${totalCartItems})`;
    }, [cartItems, totalCartItems]);

    return (
        <Layout>
            <StrictMode>
                <div>Shop Front: Cart ({cartItems.length} products, {totalCartItems} items) | Orders ({orders.length})</div>
                <div className={styles.container}>
                    <ProductList products={products} addToCart={dispatch} />
                    <Cart items={cartItems} updateQuantity={dispatch} />
                </div>
            </StrictMode>
        </Layout>
    )
}

export default UseEffect;