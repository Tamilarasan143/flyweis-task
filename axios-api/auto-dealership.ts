
import { AutoDealershipEntry, AutoDealershipResponse, PostAutoDealership } from '@/models/auto-dealership';
import apiClient from './apiClient';


export const autoDealershipRoutes = {
  getAutoDealerships: async () => {
    return await apiClient.get<AutoDealershipResponse>(`/api/v1/admin/AutoDealerShip/allAutoDealerShip`);
  },
    postAutoDealership:async (body:PostAutoDealership) => {
    return await apiClient.post<AutoDealershipEntry>(`/api/v1/admin/AutoDealerShip/addAutoDealerShip`,body);
  },
    deleteAutoDealerships: async () => {
    return await apiClient.delete(`/api/v1/admin/AutoDealerShip/deleteAutoDealerShip`);
  },

};
