
import { AutoDealershipResponse } from '@/models/auto-dealership';
import apiClient from './apiClient';


export const autoDealershipRoutes = {
  getAutoDealerships: async () => {
    return await apiClient.get<AutoDealershipResponse>(`/api/v1/admin/AutoDealerShip/allAutoDealerShip`);
  },
    deleteAutoDealerships: async () => {
    return await apiClient.delete(`/api/v1/admin/AutoDealerShip/deleteAutoDealerShip`);
  },

};
