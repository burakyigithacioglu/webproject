import axios from 'axios';
import { API_BASE_URL } from '../config/config';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Response interceptor for handling errors globally
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // You can handle 401/403 errors here if needed
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default axiosInstance;
