// api.js or services/api.js
import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api-dapoorai.vercel.app',
    withCredentials: true,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;
