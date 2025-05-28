
import { ArticleResponse } from '@/models/article';
import apiClient from './apiClient';


export const articleRoutes = {
  getArticles: async () => {
    return await apiClient.get<ArticleResponse>(`/api/v1/admin/Article/getArticle`);
  },

};
