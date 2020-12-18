import Axios from 'axios';

const uiConst = {
    url: process.env.REACT_APP_URL,
    getUrl: () => uiConst.url,
};

const axiosInstance = Axios.create({
    baseURL: uiConst.getUrl(),
    headers: {
        "Content-Type": "application/json",
        "Pragma": "no-cache",
        "Access-Control-Allow-Origin": "*"
    }
});

export {axiosInstance};
