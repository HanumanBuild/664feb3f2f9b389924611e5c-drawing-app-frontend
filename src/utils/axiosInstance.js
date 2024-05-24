import axios from 'axios';

// Creating axios instance with baseURL and headers
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DRAWING_APP_BACKEND_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Exporting axios instance
export default axiosInstance;