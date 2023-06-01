import { Get } from "../PrivateService"

const path = '/persona/profile';

const userProfile = async () => {
    const response = await Get(path);
    return response.data;
}

export { userProfile }