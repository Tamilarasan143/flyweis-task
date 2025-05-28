"use client";
import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAuth = () => {
  const queryClient = useQueryClient();


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

    logIn,
    isLoginLoading,
  };
};
