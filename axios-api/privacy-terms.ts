
import apiClient from './apiClient';


export const privacyAndTermsRoutes = {
  getAllTerm: async () => {
    return await apiClient.get(`/api/v1/Term/all`);
  },

};
