export default function getPostSchema(post) {
  return {
    "@context": "http://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    image: [],
    datePublished: post.date,
    dateModified: post.date,
    author: [
      {
        "@type": "Person",
        name: "Simon Hurley",
        url: "https://planethurley.com",
      },
    ],
  };
}
