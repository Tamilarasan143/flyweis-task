import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";




export const usePrivacyAndTerms = () => {

  //GET
  const { data: privacyAndTerms, isLoading: privacyAndTermsIsLoading } = useQuery({
    queryKey: ["privacyAndTerms"], // Pass queryKey within an object
    queryFn: async () => api.privacyAndTerms.getAllTerm(), // Specify the query function
    refetchOnMount: false,
  });
  //GET

  return {
    privacyAndTerms,
    privacyAndTermsIsLoading,
  };
};
