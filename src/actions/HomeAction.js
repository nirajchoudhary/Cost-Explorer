import {axiosInstance, axiosInstanceWithToken} from '../utils/Client';
import {
    NOW_CERTS_USER_PROFILE, NOW_CERTS_LOB
} from './ActionTypes';


const ogcAction = async (action) => {
    try {
        let result;
        switch (action.type) {
            case NOW_CERTS_USER_PROFILE: {
                result = await axiosInstance.post(`/nowcerts/user/profile/`, action.token);
                break;
            }
            case NOW_CERTS_LOB: {
                result = await axiosInstanceWithToken.get(
                    `/nowcerts/lob/list/`, action.token
                );
                break;
            }
            default:
                result = {};
        }

        if (200 === result.status || 201 === result.status) {
            return result.data;
        }
    } catch (error) {
        if(401 === error.response.status) {
            return false;
        }
        throw error.response;
    }

    return false;
}

export default ogcAction;
