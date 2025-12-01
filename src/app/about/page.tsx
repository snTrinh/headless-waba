import { gql } from "@apollo/client";
import { getClient } from "../../lib/apollo";

export default async function AboutPage() {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query AboutPage {
        page(id: "about-us", idType: URI) {
          title
          content
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    `,

    fetchPolicy: "no-cache",
  });

  const page = data?.page;

  if (!page) {
    return <p>About Us page not found.</p>;
  }

  return (
    <div>
      {page.featuredImage && (
        <div
          style={{
            width: "100%",
            height: "400px",
            backgroundImage: `url(${page.featuredImage.node.sourceUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <h1 style={{ color: "white", padding: "2rem" }}>{page.title}</h1>
        </div>
      )}
      <div style={{ padding: "2rem" }}>
        <h1>{page.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: page.content }} />
      </div>
    </div>
  );
}
