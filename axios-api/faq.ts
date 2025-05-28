
import { FAQResponse } from '@/models/faq';
import apiClient from './apiClient';


export const faqRoutes = {
  getAllFaq: async () => {
    return await apiClient.get<FAQResponse>(`/api/v1/faq/all`);
  },

};
