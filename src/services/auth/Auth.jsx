import { Post } from "../PublicService";
import { getLocalToken } from "./LocalUser";

const path = '/auth/singin';

const Login = async (credentials) =>{
    const response = await Post(path, credentials);
    return response.data;
}

export { Login }
