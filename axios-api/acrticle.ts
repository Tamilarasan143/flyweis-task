
import apiClient from './apiClient';


export const articleRoutes = {
  getArticles: async () => {
    return await apiClient.get(`/api/v1/admin/Article/getArticle`);
  },

};
