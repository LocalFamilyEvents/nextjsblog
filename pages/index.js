import { gql, GraphQLClient } from "graphql-request";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

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
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Post</h2>
        <ul className={utilStyles.list}>
          {posts.map(({ id, date, title, slug, thumbnail }) => {
            const { url: imageUrl, width, height } = thumbnail[0]
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${slug}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <Image src={imageUrl} width={width} height={height} />
              </li>
            )
          })}
        </ul>
      </section>
    </Layout>
  );
};

export default Home;
