export interface Article {
  _id: string;
  title: string;
  description: string;
  image: string;
  popular: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface ArticleData {
  docs: Article[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}

export interface ArticleResponse {
  status: number;
  message: string;
  data: ArticleData;
}
