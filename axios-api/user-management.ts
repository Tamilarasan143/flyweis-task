
import { UserItem, UserManagementResponse } from '@/models/user-management';
import apiClient from './apiClient';


export const userManagementRoutes = {
  getUserManagement: async () => {
    return await apiClient.get<UserManagementResponse>(`/api/v1/admin/getAllUsers`);
  },
    deleteUser: async (id:UserItem[`_id`]) => {
    return await apiClient.delete(`/api/v1/admin/deleteUser/${id}`);
  },
};
