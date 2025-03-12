import axios from 'axios';
import Config from 'react-native-config';

export const apiClient = axios.create({
  baseURL: Config.API_URL,
  timeout: 3000,
  withCredentials: true,
});

apiClient.interceptors.request.use(function (req) {
  console.log('req', req);

  return req;
});
apiClient.interceptors.response.use(function (res) {
  console.log('res', res);

  return res;
});
