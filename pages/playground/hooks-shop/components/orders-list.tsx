import { useContext } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import ShopContext from "../context";
import Date from "./dates/pretty-date";
import OrderableItemList from "./orderableItem-list";

const OrdersList = () => {
  const { orders } = useContext(ShopContext);

  return (
    <Card md={1}>
      <Card.Body>
        <Card.Title>Orders</Card.Title>
        <ListGroup>
          {orders.map(({ placed, items }: Order, index: number) => (
            <ListGroupItem key={index}>
              <p>
                Placed: <Date date={placed} />
              </p>
              <OrderableItemList items={items} />
            </ListGroupItem>
          ))}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default OrdersList;
