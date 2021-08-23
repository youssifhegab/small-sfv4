import useSWR from "swr";

import { fetch } from "./fetch";

export function useQuery({query, variables, initialData = null}) {
    let key = null;
    if (variables) {
        key = [variables, query];
    }
    console.log("in use Query: "+ query, variables);

    const {data, error, ...rest} = useSWR(
        key,
        () => fetch({
            query,
            variables,
        }),{initialData, revalidateOnFocus: false}
    );
    return {data, error, isLoading: !data, ...rest};
}