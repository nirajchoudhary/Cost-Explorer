// import {axiosInstance} from '../utils/AxiosSetting';
import {GET_CURRENCY_VALUE} from './ActionTypes';


const productAction = (action) => {
    switch (action.type) {
        case GET_CURRENCY_VALUE: {
            // result = await axiosInstance.get(`/latest?base=INR`);
            return fetch('https://api.exchangeratesapi.io/latest?base=INR')
        }
        default:
            return false;
    }
}

export default productAction;
