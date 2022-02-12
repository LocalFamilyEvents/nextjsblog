import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

const Cart = ({ items, updateQuantity }) => {
  const disabled = items === 0;

  const handleUpdateQuantity = (sku, newQuantity) => updateQuantity({
    type: 'updateQuantity',
    payload: {
        sku,
        quantity: parseInt(newQuantity)
    }
  });

  return (
    <Card md={1}>
      <Card.Body>
        <Card.Title>Cart</Card.Title>
        <ListGroup>
          {items.map(({quantity, sku, title}) => (
            <ListGroupItem key={sku}>
              <input type='number' min={0} max={99} value={quantity} onChange={(e) => handleUpdateQuantity(sku, e.target.value)} /> x {title}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Button variant="primary" disabled={disabled}>
          Place Order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
