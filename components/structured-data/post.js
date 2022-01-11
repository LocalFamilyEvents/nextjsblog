import getPostSchema from '../../lib/structureddata/post'

export default function PostSchema({ post }) {
  return (
    <script
      key={`postJSON-${post.id}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getPostSchema(post)) }}
    />
  );
}
