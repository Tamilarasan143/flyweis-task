/* eslint-disable @typescript-eslint/no-explicit-any */
import { ApiError } from '@/models/api-error';
import appSettings from '@/utils/app/settings';

import axios, { Axios, AxiosRequestConfig, AxiosResponse } from 'axios';

class ApiClient {
  private axiosClient: Axios;

  constructor() {
    // const baseUrl = getBaseUrl();
    // console.log('ApiClient baseUrl ======>', baseUrl)
    this.axiosClient = axios.create({
      baseURL: "https://mamun-reza-freeshops-backend.vercel.app/",
    });


    this.axiosClient.interceptors.request.use(async (config) => {
      const token = appSettings.getAuthToken();

      if (config.headers && token) {
        config.headers[`Authorization`] = `Bearer ${token}`;
       
      }
      config.headers[`Content-Type`] = 'application/json';
      return config;
    });
  }


  // Generic GET method
  /**
   *
   * @param url
   * @returns
   */
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.axiosClient.get<T>(url, config);
      if (res.status >= 200 && res.status <= 299) {
        return res.data;
      } else {
        const error = {
          code: res.status,
          message: res.statusText,
          errorBody: res.data,
        };
        return Promise.reject(error);
      }
    } catch (error: any) {
      return Promise.reject(this.handleAxiosError(error));
    }
  }

  private handleAxiosError(error: any): ApiError {
    let errorCode = 0;
    let errorMessage = '';
    if (!error.response) {
      console.error(`http.error: CROS Error`, error.response);
      errorMessage = `CORS request did not succeed`;
    } else if (error.response) {
      console.log(`http.error.response.data:`, error.response.data);
      console.log(`http.error.response.status:`, error.response.status);
      console.log(`http.error.response.headers:`, error.response.headers);
      const data = error.response.data;
      if (data) {
        errorCode = data.code || data.status;
        errorMessage = data.message || data.error;
      } else {
        errorCode = error.response.status;
        errorMessage = error.response.statusText;
      }
    } else if (error.request) {
      console.error(`http.error:`, error.request);
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      errorCode = 1500;
      errorMessage = `No response from server`;
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error(`http.error:`, error.response);
      errorCode = 1500;
      errorMessage = `Something happened in setting up the request that triggered an Error`;
    }
    return { code: errorCode, message: errorMessage };
  }

  // Generic POST method
  /**
   *
   * @param url
   * @param data
   * @returns
   */
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.axiosClient.post<T>(url, data, config);
      if (res.status >= 200 && res.status <= 299) {
        return res.data;
      } else {
        const error = {
          code: res.status,
          message: res.statusText,
          errorBody: res.data,
        };
        return Promise.reject(error);
      }
    } catch (error: any) {
      return Promise.reject(this.handleAxiosError(error));
    }
  }

  // Generic PUT method
  /**
   *
   * @param url
   * @param data
   * @returns
   */
  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const res = await this.axiosClient.put<T>(url, data, config);
      if (res.status >= 200 && res.status <= 299) {
        return res.data;
      } else {
        const error = {
          code: res.status,
          message: res.statusText,
          errorBody: res.data,
        };
        return Promise.reject(error);
      }
    } catch (error: any) {
      return Promise.reject(this.handleAxiosError(error));
    }
  }

  // Generic DELETE method
  /**
   *
   * @param url
   * @returns
   */
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    try {
      const res = await this.axiosClient.delete(url, config);
      if (res.status >= 200 && res.status <= 299) {
        return res.data;
      } else {
        const error = {
          code: res.status,
          message: res.statusText,
          errorBody: res.data,
        };
        return Promise.reject(error);
      }
    } catch (error: any) {
      return Promise.reject(this.handleAxiosError(error));
    }
  }
}

const apiClient = new ApiClient();
export default apiClient;
