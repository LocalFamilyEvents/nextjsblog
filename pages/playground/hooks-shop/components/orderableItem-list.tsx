import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

import Price from "../components/price";

const OrderableItemList = ({ items } : { items: Array<OrderableItem> }) => {
  return (
    <ListGroup>
      {items.map(({ title, quantity, price }: OrderableItem, index: number) => (
        <ListGroupItem key={index}>
          {title} - {quantity} x <Price value={price} />
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default OrderableItemList;
