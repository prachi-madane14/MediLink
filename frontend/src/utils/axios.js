import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://medilink-uz08.onrender.com', // backend base URL
});

// Automatically attach token from localStorage (if present)
const token = localStorage.getItem('token');
if (token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export default instance;
