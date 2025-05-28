import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";




export const useArticle = () => {

  //GET
  const { data: articles, isLoading: articlesIsLoading } = useQuery({
    queryKey: ["article"], // Pass queryKey within an object
    queryFn: async () => api.article.getArticles(), // Specify the query function
    refetchOnMount: false,
  });
  //GET

  return {
    articles,
    articlesIsLoading,
  };
};
