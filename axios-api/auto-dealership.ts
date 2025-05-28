
import apiClient from './apiClient';


export const autoDealershipRoutes = {
  getAutoDealerships: async () => {
    return await apiClient.get(`/api/v1/admin/AutoDealerShip/allAutoDealerShip`);
  },

};
