import Axios from 'axios';
import {getToken} from './TokenManager';

const uiConst = {
    url: process.env.REACT_APP_URL,
    getUrl: () => uiConst.url,
};


function getAuthToken() {
    return 'Token ' + getToken();
}

const axiosInstance = Axios.create({
    baseURL: uiConst.getUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Pragma': 'no-cache'
    }
});

const axiosInstanceWithToken = Axios.create({
    baseURL: uiConst.getUrl(),
    headers: {
        'Content-Type': 'application/json',
        'Pragma': 'no-cache'
    }
});

axiosInstanceWithToken.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${window.token.access_token}`
    return config;
},(error) => {
    return Promise.reject (error);
});

export {
    axiosInstance,
    axiosInstanceWithToken,
    getAuthToken
};
