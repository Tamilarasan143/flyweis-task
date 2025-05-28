export interface TermsData {
  _id: string;
  title: string;
  description: string;
  type: string; // Example: "TERMS", "PRIVACY", etc.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  desc: any[]; // If you know the structure of `desc`, define it accordingly
  createdAt: string;
  updatedAt: string;
  __v: number;
}

export interface TermsResponse {
  status: number;
  message: string;
  data: TermsData;
}

export interface PostTerms{
    title: string;
  description: string;
}