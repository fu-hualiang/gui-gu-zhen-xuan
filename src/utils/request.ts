import axios from 'axios';
import { ElMessage } from 'element-plus';
import { GET_TOKEN } from '@/utils/token.ts';

const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 5000,
});

request.interceptors.request.use((config) => {
  if (GET_TOKEN()) {
    config.headers.token = GET_TOKEN();
  }
  return config;
});

request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    let message = '';
    const status = error.response.status;
    switch (status) {
      case 401:
        message = 'TOKEN 过期';
        break;
      case 403:
        message = '无权访问';
        break;
      case 404:
        message = '请求地址错误';
        break;
      case 500:
        message = '服务器错误';
        break;
      default:
        message = '未知错误';
    }
    ElMessage({
      type: 'error',
      message,
    });

    return Promise.reject(error);
  },
);

export default request;
