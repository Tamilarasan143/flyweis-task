
import { Article, ArticleResponse } from '@/models/article';
import apiClient from './apiClient';


export const articleRoutes = {
  getArticles: async () => {
    return await apiClient.get<ArticleResponse>(`/api/v1/admin/Article/getArticle`);
  },
  deleteArticle:async (id:Article[`_id`]) => {
    return await apiClient.delete<ArticleResponse>(`/api/v1/admin/Article/deleteArticle/${id}`);
  },
};
