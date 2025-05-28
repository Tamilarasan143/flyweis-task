
import { FAQItem, FAQResponse } from '@/models/faq';
import apiClient from './apiClient';


export const faqRoutes = {
  getAllFaq: async () => {
    return await apiClient.get<FAQResponse>(`/api/v1/faq/all`);
  },
  deleteFaq: async (id:FAQItem[`_id`]) => {
    return await apiClient.delete(`/api/v1/faq/delete/${id}`);
  },

};
