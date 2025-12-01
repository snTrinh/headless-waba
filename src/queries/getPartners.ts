// queries/getPartners.ts
import { gql } from "@apollo/client";

export const GET_PARTNERS = gql`
  query GetPartners {
  partners(first: 100) {
    nodes {
      id
      title
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      partnerFields {
        websiteurl
      }
    }
  }
}

`;
