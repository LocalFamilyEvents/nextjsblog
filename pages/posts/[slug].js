import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";

import Date from "../../components/dates";
import Layout from "../../components/layout";

import utilStyles from "../../styles/utils.module.css";
import PostSchema from "../../components/structured-data/post";

export const getServerSideProps = async (pageContext) => {
  const { GRAPH_CMS_CONTENT_API: url, GRAPH_CMS_AUTH_TOKEN: token } =
    process.env;
  const postSlug = pageContext.query.slug;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const query = gql`
    query ($postSlug: String!) {
      post(where: { slug: $postSlug }) {
        id
        title
        description
        slug
        excerpt
        date
        tags
        thumbnail {
          url
        }
      }
    }
  `;

  const variables = {
    postSlug,
  };

  const data = await graphQLClient.request(query, variables);
  
  return {
    props: {
      post: data.post
    },
  };
};


export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title>{post.title} - PlanetHurley.com</title>
        <meta property="og:title" content={post.excerpt} />
        <meta property="og:description" content={post.excerpt} />
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{post.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.description }} />
      </article>
      <PostSchema post={post} />
    </Layout>
  );
}