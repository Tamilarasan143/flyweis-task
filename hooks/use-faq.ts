import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




export const useFaqs = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: faqs, isLoading: faqIsLoading } = useQuery({
    queryKey: ["faq"], // Pass queryKey within an object
    queryFn: async () => api.faq.getAllFaq(), // Specify the query function
    refetchOnMount: false,
  });
   //DELETE
  const { mutate: deleteFAQ, status: deleteStatus } = useMutation({
    mutationKey: ["faq"],
    mutationFn: api.faq.deleteFaq,
    onError: (err: ApiError, id) => {
      console.error({
        message: `Failed to delete FAQ : ${id}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["faq"] });
    },
  });
  const isDeleteFAQLoading = deleteStatus === 'pending';

  return {
    faqs,
    faqIsLoading,
     deleteFAQ,
     isDeleteFAQLoading
  };
};
