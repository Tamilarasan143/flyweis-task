
import { FAQItem, FAQResponse, PostFAQ } from '@/models/faq';
import apiClient from './apiClient';


export const faqRoutes = {
  getAllFaq: async () => {
    return await apiClient.get<FAQResponse>(`/api/v1/faq/all`);
  },
      postFaq:async (body:PostFAQ) => {
    return await apiClient.post<FAQItem>(`/api/v1/faq/add`,body);
  },
  deleteFaq: async (id:FAQItem[`_id`]) => {
    return await apiClient.delete(`/api/v1/faq/delete/${id}`);
  },

};
