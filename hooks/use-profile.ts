"use client";
import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";


export const useProfile = () => {

  //GET
  const { data: profile, isLoading: profileIsLoading } = useQuery({
    queryKey: ["profile"], // Pass queryKey within an object
    queryFn: async () => api.auth.getProfile(), // Specify the query function
    refetchOnMount: false,
  });



  return {
    profile,
    profileIsLoading,
  };
};
