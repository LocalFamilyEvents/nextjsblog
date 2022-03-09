import { useContext } from 'react';
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import ShopContext from "../shop-context";

const OrdersList = () => {

  const { orders } = useContext(ShopContext);

  return (
    <Card md={1}>
      <Card.Body>
        <Card.Title>Orders</Card.Title>
        <ListGroup>
          {orders.map(({ placed, items }, index) => (
            <ListGroupItem key={index}>
              <p>Placed: {placed}</p>
              {items.map(({ title, quantity }, index) => (
                <div key={index}>
                  {title} x {quantity}
                </div>
              ))}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OrdersList;
