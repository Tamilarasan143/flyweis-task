"use client";
import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: profile, isLoading: profileIsLoading } = useQuery({
    queryKey: ["auth"], // Pass queryKey within an object
    queryFn: async () => api.auth.getProfile(), // Specify the query function
    refetchOnMount: false,
  });

  //POST
  const { mutate: logIn, status: postStatus } = useMutation({
    mutationKey: ["auth"],
    mutationFn: api.auth.logIn,
    onError: (err: ApiError) => {
      console.log('err', err)
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
  });
  const isLoginLoading = postStatus === "pending";

  return {
    profile,
    profileIsLoading,
    logIn,
    isLoginLoading,
  };
};
