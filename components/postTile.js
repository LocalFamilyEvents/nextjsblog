import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import classnames from 'classnames';

import { ThemeContext } from "./themeContext";

import styles from './postTile.module.css';

const PostTile = ({ date, slug, imageUrl, title, excerpt }) => {

  const themeContext = useContext(ThemeContext);
  const { background, foreground } = themeContext.theme;

  return (
    <Col md="4" style={{padding: "30px"}}>
      <Card key={date + slug} style={{ backgroundColor: background, color: foreground }} className={classnames(styles.card)}>
        <Card.Img variant="top" src={imageUrl} className={styles.cardImage} />
        <Card.Body>
          <Card.Title>
            ({themeContext.theme.id}) {title} - <Date dateString={date} />
          </Card.Title>
          <Card.Text className={styles.cardText}>{excerpt}</Card.Text>
          <Link href={`/posts/${slug}`}>
            <Button variant="primary">Read</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default PostTile;
