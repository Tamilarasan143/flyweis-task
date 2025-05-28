
export interface ApiError {
  code: number;
  message: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errorBody?: any;
}
