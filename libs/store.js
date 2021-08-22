

import useSWR from "swr";
import request from "graphql-request";

const getStore = (query, variables) => 
                        request("https://graphql-sfv4.zyda.com/graphql", query, variables)


export const useStore = (query, variables)=> {
    const {data, error} = useSWR([query, variables], getStore)

    return {
        data,
        error
    }
}