import { Post } from "../PublicService";

const pathSingin = '/auth/singin';
const pathSingup = '/auth/singup';

const Login = async (credentials) =>{
    const response = await Post(pathSingin, credentials);
    return response.data;
}

const Register = async (userData) =>{
    const response = await Post(pathSingup, userData);
    if(response?.data?.id)
        return response.data;
    return null;
}

export { Login, Register }
