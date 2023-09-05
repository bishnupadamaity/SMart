import useSWR from "swr";

function useSWRProduct (url: string | null) {
  const BASE_URL = 'https://fakestoreapi.com';
  
    const fetcher = async (url: string) => {

      const data = await fetch(url).then(res => res.json());
       return data;
        
    };
  
    const { data, error, isLoading } = useSWR(BASE_URL+`${url}`, fetcher)

   
    return {
      data,
      isLoading,
      error
    }
}
  
export default useSWRProduct

