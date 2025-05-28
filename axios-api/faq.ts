
import apiClient from './apiClient';


export const faqRoutes = {
  getAllFaq: async () => {
    return await apiClient.get(`/api/v1/faq/all`);
  },

};
