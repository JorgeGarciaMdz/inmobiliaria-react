import { Get } from "../PrivateService"
import { removeLocalToken } from "../auth/LocalUser";

const path = '/persona/profile';

const userProfile = async () => {
    const response = await Get(path);
    if(response.error){
        removeLocalToken()
        return null;
    }
    return response.data;
}

export { userProfile }