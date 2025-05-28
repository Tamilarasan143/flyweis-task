import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";




export const useFaqs = () => {

  //GET
  const { data: faqs, isLoading: faqIsLoading } = useQuery({
    queryKey: ["faq"], // Pass queryKey within an object
    queryFn: async () => api.faq.getAllFaq(), // Specify the query function
    refetchOnMount: false,
  });
  //GET

  return {
    faqs,
    faqIsLoading,
  };
};
