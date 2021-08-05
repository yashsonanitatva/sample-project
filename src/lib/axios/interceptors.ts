import axios from "axios";
import {
  HTTP_STATUS_TOKEN_EXPIRE,
  HTTP_STATUS_BAD_REQUEST,
  HTTP_STATUS_CONFLICT,
  HTTP_STATUS_INTERNAL_SERVER,
  HTTP_STATUS_OK,
  HTTP_STATUS_NOT_FOUND,
} from "../constant";

export type Method =
  | "get"
  | "GET"
  | "delete"
  | "DELETE"
  | "head"
  | "HEAD"
  | "options"
  | "OPTIONS"
  | "post"
  | "POST"
  | "put"
  | "PUT"
  | "patch"
  | "PATCH"
  | "purge"
  | "PURGE"
  | "link"
  | "LINK"
  | "unlink"
  | "UNLINK";

export type ResponseType =
  | "arraybuffer"
  | "blob"
  | "document"
  | "json"
  | "text"
  | "stream";

export interface AxiosRequestConfig {
  [key: string]: any;
  url?: string;
  method?: Method;
  headers?: any;
  data?: any;
  responseType?: ResponseType;
}

export interface AxiosResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: AxiosRequestConfig;
  message?: any;
  success?: boolean;
}

const getErrorText = (status: Number) => {
  switch (status) {
    case 400:
      return HTTP_STATUS_BAD_REQUEST;
    case 401:
      return HTTP_STATUS_TOKEN_EXPIRE;
    case 404:
      return HTTP_STATUS_NOT_FOUND;
    case 409:
      return HTTP_STATUS_CONFLICT;
    case 500:
      return HTTP_STATUS_INTERNAL_SERVER;
    default:
      return "";
  }
};

const initInterceptors = () => {
  // Add a request interceptor
  axios.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axios.interceptors.response.use(
    function (response) {
      const apiResponse: AxiosResponse = {
        data: response.data,
        status: response.status,
        statusText: HTTP_STATUS_OK,
        headers: response.headers,
        config: response.config,
        message: response.data?.message,
        success: true,
      };
      return apiResponse;
    },

    function (error) {
      const apiError: AxiosResponse = {
        data: null,
        status: error.status,
        statusText: getErrorText(error.status),
        headers: error.headers,
        config: error.config,
        message: error.data?.message,
        success: false,
      };
      return apiError;
    }
  );
};

export default initInterceptors;
