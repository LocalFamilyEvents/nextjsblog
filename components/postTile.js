import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Link from "next/link";

import { ThemeContext } from "./themeContext";

import styles from './postTile.module.css';

const PostTile = ({ date, slug, imageUrl, title, excerpt }) => {

  const themeContext = useContext(ThemeContext);
  const { background, foreground } = themeContext.theme;

  return (
    <Card key={date + slug} style={{ backgroundColor: background, width: "18rem", color: foreground }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>
          ({themeContext.theme.id}) {title} - <Date dateString={date} />
        </Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <Link href={`/posts/${slug}`}>
          <Button variant="primary">Read</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default PostTile;
