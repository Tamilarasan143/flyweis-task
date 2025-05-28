import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useArticle = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: articles, isLoading: articlesIsLoading } = useQuery({
    queryKey: ["article"], // Pass queryKey within an object
    queryFn: async () => api.article.getArticles(), // Specify the query function
    refetchOnMount: false,
  });
  //POST
  const { mutate: addArticle, status: postStatus } = useMutation({
    mutationKey: ["article"],
    mutationFn: api.article.postArticle,
    onError: (err: ApiError, data) => {
      console.error({
        message: `Failed to Add Article : ${data.title}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
  const isPostArticleLoading = postStatus === "pending";
  //DELETE
  const { mutate: deleteArticle, status: deleteStatus } = useMutation({
    mutationKey: ["article"],
    mutationFn: api.article.deleteArticle,
    onError: (err: ApiError, id) => {
      console.error({
        message: `Failed to delete Article : ${id}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["article"] });
    },
  });
  const isDeleteArticleLoading = deleteStatus === "pending";

  return {
    articles,
    articlesIsLoading,
    addArticle,
    isPostArticleLoading,
    deleteArticle,
    isDeleteArticleLoading,
  };
};
