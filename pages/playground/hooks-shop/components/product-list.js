import { useContext } from 'react';

import ShopContext from '../shop-context';
import Product from './product';

const ProductList = () => {

    const { products } = useContext(ShopContext);

    return (
        <ul>
            {products.map((product) => (
                <li key={product.sku}><Product product={product} /></li>
            ))}
        </ul>
    )
};

export default ProductList;