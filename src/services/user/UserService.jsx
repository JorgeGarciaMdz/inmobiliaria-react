import { Get } from "../PrivateService"
import { removeLocalToken } from "../auth/LocalUser";

const path = '/persona';

const userProfile = async () => {
    const response = await Get(`${path}/profile`);
    if (response.error) {
        removeLocalToken()
        return null;
    }
    return response.data;
}

const userNoAdmin = async () => {
    const response = await Get(path);
    if (response.error) {
        removeLocalToken()
        return null;
    }
    return response.data;
}

export { userProfile, userNoAdmin }