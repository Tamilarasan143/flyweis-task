import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




export const usePrivacyAndTerms = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: privacyAndTerms, isLoading: privacyAndTermsIsLoading } = useQuery({
    queryKey: ["privacyAndTerms"], // Pass queryKey within an object
    queryFn: async () => api.privacyAndTerms.getAllTerm(), // Specify the query function
    refetchOnMount: false,
  });
    const { mutate: addPrivacyAndTerms, status: postStatus } = useMutation({
    mutationKey: ["privacyAndTerms"],
    mutationFn: api.privacyAndTerms.postTerm,
    onError: (err: ApiError, data) => {
      console.error({
        message: `Failed to Add PrivacyAndTerms : ${data.title}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["privacyAndTerms"] });
    },
  });
  const isPostPrivacyAndTermsLoading = postStatus === "pending";
   //DELETE
  const { mutate: deletePrivacyAndTerms, status: deleteStatus } = useMutation({
    mutationKey: ["privacyAndTerms"],
    mutationFn: api.privacyAndTerms.deleteTerm,
    onError: (err: ApiError, id) => {
      console.error({
        message: `Failed to delete AutoDealerShip : ${id}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["privacyAndTerms"] });
    },
  });
  const isDeletePrivacyAndTermsLoading = deleteStatus === 'pending';

  return {
    privacyAndTerms,
    privacyAndTermsIsLoading,
    deletePrivacyAndTerms,
    isDeletePrivacyAndTermsLoading,
    addPrivacyAndTerms,
    isPostPrivacyAndTermsLoading
  };
};
