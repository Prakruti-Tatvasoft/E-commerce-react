import axios from "axios";

const token = localStorage.getItem('token')

const axiosWrapper = axios.create({
    baseURL: 'http://localhost:8084',
    headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
})

axiosWrapper.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export { axiosWrapper }