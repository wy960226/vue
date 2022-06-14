import axios from 'axios';
axios.defaults.timeout = 5000;// 请求超时
axios.defaults.baseURL = "http://127.0.0.1:8081";

axios.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(
    response => response.data,
    error => error
);

export default axios    
