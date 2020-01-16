import axios from 'axios';
import { getToken } from '../utils/storage';
import { BASE_API_URL } from './config';
import { clearToken } from '../utils/storage';
import RNRestart from 'react-native-restart';

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
})

api.interceptors.request.use(function (config) {
  console.log("Request: ", config)
  return config;
}, function (error) {
  // Do something with request error 
  return Promise.reject(error);
})

api.interceptors.response.use(function (response) {
  // Do something with response data 
  console.log("Response: ", response)
  return response.data;
}, function (error) {
  if (error.response) {
    if (error.response.status === 401) {
      clearToken()
      RNRestart.Restart()
    }
  }

  return Promise.reject(error);
});

export function setToken(token) {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
}

getToken().then((token) => {
  setToken(token);
});
