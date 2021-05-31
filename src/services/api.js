import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://localhost:21465/api'
});

export default api;