import { gql } from "graphql-request";

 const categoriesQuery = gql`
 query ($subdomain: String!) {
    categories(subdomain: $subdomain){
        products{
        descriptionEn
        maxPrepTime
        displayPrice
        titleEn
        uuid
        }
        photoUrl
        restaurantId
        titleEn
        uuid
    }
}`;

export default categoriesQuery;