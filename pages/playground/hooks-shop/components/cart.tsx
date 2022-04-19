import { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import ShopContext from "../context";

const Cart = () => {

  const { actions, cart : items} = useContext(ShopContext);

  const disabled = items === 0;

  const handleUpdateQuantity = (sku: string, newQuantity: number) => actions.updateCartItemQuantity(sku, newQuantity);

  const handlePlaceOrder = () => {
    const order = {
      placed: new Date(),
      items
    };
    actions.placeOrder(order);
  };
  
  return (
    <Card md={1}>
      <Card.Body>
        <Card.Title>Cart </Card.Title>
        <ListGroup>
          {items.map(({quantity, sku, title} : { quantity: number, sku: string, title: string }) => (
            <ListGroupItem key={sku}>
              <input type='number' min={0} max={99} value={quantity} onChange={(e) => handleUpdateQuantity(sku, parseInt(e.target.value))} /> x {title}
            </ListGroupItem>
          ))}
        </ListGroup>
        <Button variant="primary" disabled={disabled} style={disabled ? { backgroundColor: 'grey' } : {} } onClick={handlePlaceOrder}>
          Place Order
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Cart;
