import { remark } from 'remark'
import html from 'remark-html'

import { getAllPostIds, getPostData } from '../../lib/posts'

import Layout from '../../components/layout'

export default function Post({ postData }) {
    return (
        <Layout>
            {postData.title}
            <br />
            {postData.id}
            <br />
            {postData.date}
            <br/>
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths, fallback: false
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}