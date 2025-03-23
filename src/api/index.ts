import axios from 'axios';
import Config from 'react-native-config';

export const apiClient = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 3000,
  withCredentials: true,
});

apiClient.interceptors.request.use(function (req) {
  return req;
});
apiClient.interceptors.response.use(function (res) {
  return res;
});
