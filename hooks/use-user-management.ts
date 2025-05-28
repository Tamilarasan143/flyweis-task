import { api } from "@/axios-api";
import { useQuery } from "@tanstack/react-query";




export const useUserManagement = () => {

  //GET
  const { data: userManagements, isLoading: userManagementsIsLoading } = useQuery({
    queryKey: ["userManagement"], // Pass queryKey within an object
    queryFn: async () => api.userManagement.getUserManagement(), // Specify the query function
    refetchOnMount: false,
  });
  //GET

  return {
    userManagements,
    userManagementsIsLoading,
  };
};
