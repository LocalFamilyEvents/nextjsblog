// import { GraphQLClient } from 'graphql-request';

// export default async ({body}, res) => {
//     new GraphQLClient(process.env.ENDPOINT, {
//         headers: { "Authorization": process.env.GRAPH_CMS_TOKEN}
//     })

//     const mutation = gql`
//     mutation {
//         createPost (
//           data: {
//             title: "New Post",
//             description: "A new post about something interesting"
//             slug: "New Post Slug",
//             excerpt: "New Post Excerpt",
//             date: "2022-02-02",
//             tags: [
//               "NewPostTag1",
//               "NewPostTag2",
//               "NewPostTag3"
//             ]
//           }
//         ) {
//           title
//           slug
//           excerpt
//           date
//           tags
//         }
//       }
//       `

//     await graphcms.Request
// }