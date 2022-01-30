import { gql, GraphQLClient } from "graphql-request";

import Link from "next/link";
import Head from "next/head";
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Row from "react-bootstrap/Row"
import matter from "gray-matter";

import Layout from "../components/layout"
import Date from "../components/dates"
import utilStyles from "../styles/utils.module.css"

export const getStaticProps = async () => {
  const { GRAPH_CMS_CONTENT_API : url, GRAPH_CMS_AUTH_TOKEN : token } = process.env

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization:
        "Bearer " + token,
    },
  })

  const query = gql`
    query {
      posts {
        id
        title
        slug
        excerpt
        date
        tags,
        thumbnail {
          url,
          width,
          height,
        }
      }
    }
  `;

  const data = await graphQLClient.request(query)

  return {
    props: {
      posts: data.posts
    }
  }
};

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

const Home = ({ posts }) => {
  return (
    <Layout home>
      <Head>
        <title>PlanetHurley.com - Simon Hurley</title>
      </Head>
        <Row>
          {posts.map(({ date, title, excerpt, slug, thumbnail }) => {
            const { url: imageUrl } = thumbnail[0]
            return (
              <Card key={date} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imageUrl} />
                <Card.Body>
                  <Card.Title>{title} - <Date dateString={date} /></Card.Title>
                  <Card.Text>{excerpt}</Card.Text>
                  <Link href={`/posts/${slug}`}>
                    <Button variant="primary">Read</Button>
                  </Link>
                </Card.Body>
              </Card>
            )
          })}
        </Row>
    </Layout>
  );
};

export default Home;
