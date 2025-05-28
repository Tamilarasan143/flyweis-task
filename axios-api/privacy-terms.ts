
import { TermsResponse } from '@/models/privacy-terms';
import apiClient from './apiClient';


export const privacyAndTermsRoutes = {
  getAllTerm: async () => {
    return await apiClient.get<TermsResponse>(`/api/v1/Term/all`);
  },

};
