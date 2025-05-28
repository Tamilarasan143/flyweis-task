
import { TermsData, TermsResponse } from '@/models/privacy-terms';
import apiClient from './apiClient';


export const privacyAndTermsRoutes = {
  getAllTerm: async () => {
    return await apiClient.get<TermsResponse>(`/api/v1/Term/all`);
  },
  deleteTerm: async (id:TermsData[`_id`]) => {
    return await apiClient.delete(`/api/v1/Term/delete/${id}`);
  },
};
