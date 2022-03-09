import { useContext } from "react";

import ShopContext from "../shop-context";

const Product = ({ product }) => {
  const { actions } = useContext(ShopContext);

  const { sku, title, price } = product;

  function handleAddToCart() {
    actions.addProductToCart({
      ...product,
      quantity: 1,
    });
  }

  return (
    <p>
      {sku} - {title} - {price}{" "}
      <button onClick={() => handleAddToCart()}>Add To Cart</button>
    </p>
  );
};

export default Product;
