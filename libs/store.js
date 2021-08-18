const apiEndpoint = "https://graphql-sfv4.zyda.com/graphql"
const subdomain = "demo-sfv4"
export const query = `query ($subdomain: String!) {
    store (subdomain: $subdomain) {
      id
      branchesCount
      logoUrl
      descriptionEn
      faviconUrl
      pageTitleEn
      photoUrl
    }
    categories(subdomain: $subdomain){
        products{
          descriptionEn
          maxPrepTime
          displayPrice
          titleEn
        }
        photoUrl
        restaurantId
        titleEn
        uuid
      }
  }`


export function getStore() {
    return fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({query, variables: {subdomain}})
      })
        .then(r => r.json())
        .then(data => data.data);
}