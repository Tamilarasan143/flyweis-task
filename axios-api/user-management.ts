
import apiClient from './apiClient';


export const userManagementRoutes = {
  getUserManagement: async () => {
    return await apiClient.get(`/api/v1/admin/getAllUsers`);
  },

};
