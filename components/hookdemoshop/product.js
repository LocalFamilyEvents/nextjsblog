const Product = ({ product, addToCart }) => {
  const { sku, title, price } = product;

  function handleAddToCart() {
    addToCart({
      type: "addToCart",
      payload: {
        ...product,
        quantity: 1,
      },
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
