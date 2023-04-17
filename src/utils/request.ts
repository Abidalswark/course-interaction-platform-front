import router from '@/router';
import { message } from 'ant-design-vue';
import axios, { type AxiosRequestConfig } from 'axios';
export const BASE_URL = 'http://127.0.0.1:8082';
const request = axios.create({ baseURL: `${BASE_URL}/api` });

// 请求拦截器
request.interceptors.request.use((config) => {
  const { token:token2 } = $(useUser());
  let { token } = $(useUser());
  if(token2){
    token = token2
  }
  if (token) {
    config.headers.token = token;
  }
  return config;
});

// 响应拦截器
request.interceptors.response.use((response) => {
  const { clearInfo } = $(useUser());
  const data = response.data;
  if (data.code !== 0) {
    if (data.code === 310408 || data.code === 260005 || data.code === 101010 || data.code === 240007 || data.code === 270004 || data.code === 400001 || data.code === 250004 || data.code === 280001) return response;
    if (data.code === 400001) clearInfo();nextTick(() => router.push("/"));
    message.error(data.msg);
    clearInfo();
  }
  return response;
});

export default async function (url: string, options?: AxiosRequestConfig) {
  return (
    await request({
      url,
      ...options,
    })
  ).data;
}

