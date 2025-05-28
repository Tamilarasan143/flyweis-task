import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";




export const useAutoDealerShip = () => {

  //GET
  const { data: autoDealerShips, isLoading: autoDealerShipsIsLoading } = useQuery({
    queryKey: ["autoDealerShip"], // Pass queryKey within an object
    queryFn: async () => api.article.getArticles(), // Specify the query function
    refetchOnMount: false,
  });
  //GET

  return {
    autoDealerShips,
    autoDealerShipsIsLoading,
  };
};
