import { useQuery } from "../useQuery";
import storeDetailsQuery from "../queries/storeDetailsQuery";
const useStore = ({initialData}) => 
    useQuery({
        query: storeDetailsQuery,
        variables: JSON.stringify({subdomain: "demo-sfv4"}),
        initialData
    });

export default useStore;