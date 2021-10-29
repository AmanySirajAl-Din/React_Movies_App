import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/movie",
});


// Add a request interceptor
axiosInstance.interceptors.request.use(function (config) {
    console.log("SHOW LOADER");
    console.log(config);
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
axiosInstance.interceptors.response.use(function (response) {
    console.log("HIDE LOADER")
    console.log(response);
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default axiosInstance;