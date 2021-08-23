import { fetch } from "./fetch";
import storeDetailsQuery from './queries/storeDetailsQuery';

export const getStoreDetails = async () => {
    const variables = {
        subdomain: "demo-sfv4"
    };
    return fetch({
        query: storeDetailsQuery,
        variables: JSON.stringify(variables)
    });    
}
