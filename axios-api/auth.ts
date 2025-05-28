
import apiClient from './apiClient';

export const authRoutes = {
    getProfile: async () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await apiClient.get<{message:string,data:any}>(`/api/v1/admin/getProfile`);
    },
    logIn: async (body: { email: string, password: string }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return await apiClient.post<{ data: any, accessToken: string }>(`/api/v1/admin/login`, body);
    },

};