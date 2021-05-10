import axios from 'axios';

const http = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? process.env.REACT_APP_API_URL_DEV : process.env.REACT_APP_API_URL_PROD,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

http.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
    }

    return config;
});

http.interceptors.response.use(function (res) {
    if (res.data.token) {
        localStorage.setItem('token', res.data.token);
    }

    return res;
}, function (resError) {
    if (resError.response.data.token) {
        localStorage.setItem('token', resError.response.data.token);
    }

    return Promise.reject(resError);
});

export default http;