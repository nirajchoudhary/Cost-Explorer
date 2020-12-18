import {axiosInstance} from '../utils/AxiosSetting';
import {GET_CURRENCY_VALUE} from './ActionTypes';


const productAction = async (action) => {
    try {
        let result;
        switch (action.type) {
            case GET_CURRENCY_VALUE: {
                result = await axiosInstance.get(`/latest?base=INR`);
                break;
            }
            default:
                result = {};
        }

        if (200 === result.status) {
            return result.data;
        }
    } catch (error) {
        throw error.response;
    }

    return false;
}

export default productAction;
