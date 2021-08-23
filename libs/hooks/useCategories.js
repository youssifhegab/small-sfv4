import { useQuery } from "../useQuery";
import categoriesQuery from '../queries/categoriesQuery';

const useCategories = () => 
    useQuery({
        query: categoriesQuery,
        variables: JSON.stringify({subdomain: "demo-sfv4"})
    });
export default useCategories;