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
      blogs {
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
      blogs: data.blogs
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

const Home = ({ blogs }) => {
  return (
    <Layout home>
      <Head>
        <title>PlanetHurley.com - Simon Hurley</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {blogs.map(({ id, date, title, slug, thumbnail }) => {
            const { url: imageUrl, width, height } = thumbnail[0]
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/blogs/${slug}`}>
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
