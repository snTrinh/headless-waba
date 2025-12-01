
import { gql } from "@apollo/client";
import { getClient } from "../lib/apollo";
import HeroImage from "../components/heroImage/HeroImage";

export default async function Home() {
  const client = getClient();
  const { data } = await client.query({
    query: gql`
      query AllPosts {
        posts {
          nodes {
            title
            slug
            excerpt
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    `,
    fetchPolicy: "no-cache",
  });
  
  console.log(data.posts.nodes)
  const posts = data?.posts?.nodes ?? [];
  const heroImage = posts[0].featuredImage?.node.sourceUrl;
  if (!posts.length) {
    return <p>No posts found.</p>; 
  }

  return (
    <div>
    {heroImage && <HeroImage imageUrl={heroImage} title={posts[0].title} />}

    <div >
      <h1>Blog</h1>
      {posts.map((post: any) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.excerpt }} />
        </div>
      ))}
    </div>
  </div>
  );
}
