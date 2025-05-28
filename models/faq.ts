export interface FAQItem {
  _id: string;
  question: string;
  answer: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface FAQResponse {
  status: number;
  message: string;
  data: FAQItem[];
}

export interface PostFAQ {
    question: string;
  answer: string;
}