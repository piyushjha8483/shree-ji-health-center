import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Attach JWT token to every request if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('shreeji_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth APIs
export const registerUser = (data) => api.post('/register', data);
export const loginUser = (data) => api.post('/login', data);

// Appointment APIs
export const bookAppointment = (data) => api.post('/book', data);
export const getAppointments = () => api.get('/appointments');
export const updateAppointment = (id, data) => api.put(`/appointments/${id}`, data);
export const deleteAppointment = (id) => api.delete(`/appointments/${id}`);

export default api;
