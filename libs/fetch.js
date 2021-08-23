import client from './client';

export async function fetch({query, variables = JSON.stringify({})}) {
    const request = await client.request(query, JSON.parse(variables));
    return request;
}