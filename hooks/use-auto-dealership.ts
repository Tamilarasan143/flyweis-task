import { api } from "@/axios-api";
import { ApiError } from "@/models/api-error";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useAutoDealerShip = () => {
  const queryClient = useQueryClient();
  //GET
  const { data: autoDealerShips, isLoading: autoDealerShipsIsLoading } =
    useQuery({
      queryKey: ["autoDealerShip"], // Pass queryKey within an object
      queryFn: async () => api.autoDealerShip.getAutoDealerships(), // Specify the query function
      refetchOnMount: false,
    });
  //POST
  const { mutate: addAutoDealerShip, status: postStatus } = useMutation({
    mutationKey: ["autoDealerShip"],
    mutationFn: api.autoDealerShip.postAutoDealership,
    onError: (err: ApiError, data) => {
      console.error({
        message: `Failed to Add AutoDealerShip : ${data.title}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["autoDealerShip"] });
    },
  });
  const isPostAutoDealerShipLoading = postStatus === "pending";
  //DELETE
  const { mutate: deleteAutoDealerShip, status: deleteStatus } = useMutation({
    mutationKey: ["autoDealerShip"],
    mutationFn: api.autoDealerShip.deleteAutoDealerships,
    onError: (err: ApiError, id) => {
      console.error({
        message: `Failed to delete AutoDealerShip : ${id}`,
        description: `${err.message}.Please try again later.`,
      });
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["autoDealerShip"] });
    },
  });
  const isDeleteAutoDealerShipLoading = deleteStatus === "pending";
  return {
    autoDealerShips,
    autoDealerShipsIsLoading,
    deleteAutoDealerShip,
    isDeleteAutoDealerShipLoading,
    addAutoDealerShip,
    isPostAutoDealerShipLoading,
  };
};
