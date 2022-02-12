import Product from './product';

const ProductList = ({ products, addToCart }) => {
    return (
        <ul>
            {products.map((product) => (
                <li key={product.sku}><Product product={product} addToCart={addToCart} /></li>
            ))}
        </ul>
    )
};

export default ProductList;