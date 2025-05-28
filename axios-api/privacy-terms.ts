
import { PostTerms, TermsData, TermsResponse } from '@/models/privacy-terms';
import apiClient from './apiClient';


export const privacyAndTermsRoutes = {
  getAllTerm: async () => {
    return await apiClient.get<TermsResponse>(`/api/v1/Term/all`);
  },
      postTerm:async (body:PostTerms) => {
      return await apiClient.post<TermsData>(`/api/v1/admin/Term/add`,body);
    },
  deleteTerm: async (id:TermsData[`_id`]) => {
    return await apiClient.delete(`/api/v1/Term/delete/${id}`);
  },
};
