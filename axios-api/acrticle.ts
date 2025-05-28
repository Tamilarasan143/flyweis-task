
import { Article, ArticleResponse, PostArticle } from '@/models/article';
import apiClient from './apiClient';


export const articleRoutes = {
  getArticles: async () => {
    return await apiClient.get<ArticleResponse>(`/api/v1/admin/Article/getArticle`);
  },
  postArticle:async (body:PostArticle) => {
    return await apiClient.post<Article>(`/api/v1/admin/Article/createArticle`,body);
  },
  deleteArticle:async (id:Article[`_id`]) => {
    return await apiClient.delete<ArticleResponse>(`/api/v1/admin/Article/deleteArticle/${id}`);
  },
};
