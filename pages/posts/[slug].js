import { useContext } from 'react';
import Head from "next/head";
import { gql, GraphQLClient } from "graphql-request";
import { loader } from 'graphql.macro';

import Date from "../../components/date";
import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import PostSchema from "../../components/structured-data/post";
import { UserContext } from '../../components/userContext';

const postsQuery = loader('./posts.query.graphql');

export const getServerSideProps = async (pageContext) => {
  const { GRAPH_CMS_CONTENT_API: url, GRAPH_CMS_AUTH_TOKEN: token } =
    process.env;
  const postSlug = pageContext.query.slug;

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  const variables = {
    postSlug,
  };

  const data = await graphQLClient.request(postsQuery, variables);
  
  return {
    props: {
      post: data.post
    },
  };
};


export default function Post({ post }) {
  const userContext = useContext(UserContext);

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
        <p>Did you like this article? {userContext.firstName}</p>
      </article>
      <PostSchema post={post} />
    </Layout>
  );
}