import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";




export const useUserManagement = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: userManagements, isLoading: userManagementsIsLoading } = useQuery({
    queryKey: ["userManagement"], // Pass queryKey within an object
    queryFn: async () => api.userManagement.getUserManagement(), // Specify the query function
    refetchOnMount: false,
  });
   //DELETE
  const { mutate: deleteUser, status: deleteStatus } = useMutation({
    mutationKey: ["userManagement"],
    mutationFn: api.userManagement.deleteUser,
    onError: (err: ApiError, id) => {
      console.error({
        message: `Failed to delete User : ${id}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["userManagement"] });
    },
  });
  const isDeleteUserLoading = deleteStatus === 'pending';

  return {
    userManagements,
    userManagementsIsLoading,
    deleteUser,
    isDeleteUserLoading
  };
};
