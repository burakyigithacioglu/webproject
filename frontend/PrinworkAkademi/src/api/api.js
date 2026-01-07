import axiosInstance from './axios';
import { MOCK_PACKAGES } from './mockData';

const api = {
  // Auth
  login: async (email, password) => {
    // Note: The backend expects { email, password }
    const response = await axiosInstance.post('/auth/login', { email, password });
    return response.data;
  },

  register: async (userData) => {
    // Note: The backend expects { firstName, lastName, email, phone, password }
    const response = await axiosInstance.post('/auth/register', userData);
    return response.data;
  },

  // Courses (formerly Packages)
  getPackages: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.marketplace) params.append('marketplace', filters.marketplace);
      if (filters.trainingType) params.append('trainingType', filters.trainingType);

      const response = await axiosInstance.get(`/courses?${params.toString()}`);

      // Use mock data as fallback if API returns empty or fails
      if (!response.data || response.data.length === 0) {
        return MOCK_PACKAGES;
      }

      return response.data;
    } catch (error) {
      console.warn('API failed, using mock data:', error);
      return MOCK_PACKAGES;
    }
  },

  // Cart
  getCart: async (email) => {
    const response = await axiosInstance.get('/cart', {
      params: { email }
    });
    return response.data;
  },

  addToCart: async (email, packageId) => {
    // Note: Backend might expect 'packageId' param name even if it maps to courseId internally, 
    // or we should update it to courseId if backend controller changed @RequestParam.
    // Based on previous turn, backend controller uses @RequestParam(name = "packageId") so we keep this key.
    const response = await axiosInstance.post('/cart/add', null, {
      params: { email, packageId }
    });
    return response.data;
  },

  clearCart: async (email) => {
    const response = await axiosInstance.post('/cart/clear', null, {
      params: { email }
    });
    return response.data;
  },

  getCheckout: async (email) => {
    const response = await axiosInstance.get('/cart/checkout', {
      params: { email }
    });
    return response.data;
  },

  // Orders (formerly Applications)
  createOrder: async (orderData) => {
    // Backend expects { email, courseId }
    const response = await axiosInstance.post('/orders', orderData);
    return response.data;
  },

  // Payment Info
  getPaymentInfo: async () => {
    const response = await axiosInstance.get('/payment-info');
    return response.data;
  }
};

export default api;
