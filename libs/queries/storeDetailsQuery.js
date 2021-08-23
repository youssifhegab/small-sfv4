import { gql } from "graphql-request";

const storeDetailsQuery = gql`
query ($subdomain: String!) {
    store (subdomain: $subdomain) {
      id
      branchesCount
      logoUrl
      descriptionEn
      faviconUrl
      pageTitleEn
      photoUrl
    }
  }`;

  export default storeDetailsQuery;
