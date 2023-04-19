/* eslint-disable global-require */
import axiosInstance from 'axios';
import { AuthService } from '../services/authService';
// import faker from 'faker';

const axios = axiosInstance.create({
    withCredentials: true,
    timeout: 10000,
    baseURL: '/api',
});

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            AuthService.logout();
        }

        return Promise.reject(error);
    },
);

export default axios;
