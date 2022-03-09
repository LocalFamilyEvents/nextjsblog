import { gql, GraphQLClient } from "graphql-request";

import Head from "next/head";
import Row from "react-bootstrap/Row";
import Layout from "../components/layout";
import PostTile from "../components/postTile";

export const getStaticProps = async () => {
  const { GRAPH_CMS_CONTENT_API: url, GRAPH_CMS_AUTH_TOKEN: token } =
    process.env;
  if (!url) {
    throw Error("Missing {GRAPH_CMS_CONTENT_API} environment variable");
  }

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const query = gql`
    query {
      posts {
        id
        title
        slug
        excerpt
        date
        tags
        thumbnail {
          url
          width
          height
        }
      }
    }
  `;

  const data = await graphQLClient.request(query);

  return {
    props: {
      posts: data.posts,
    },
  };
};

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsData,
//     },
//   };
// }

interface HomeProps {
  posts: Post[];
}

const Home = ({ posts } : HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>PlanetHurley.com - Simon Hurley</title>
      </Head>
      <Row>
        {posts.map((post: Post) => {
          const imageUrl = post.thumbnail[0].url;

          return <PostTile key={post.id} {...post} imageUrl={imageUrl} />;
        })}
      </Row>
    </Layout>
  );
};

export default Home;
