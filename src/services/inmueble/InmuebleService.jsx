import { Get, Post, Put, Delete } from "../PrivateService";
import { removeLocalToken } from "../auth/LocalUser";

const path = '/inmueble';

const findAllInmueble = async () => {
    const response = await Get(path);
    if(response.error){
        removeLocalToken();
        return null;
    }
    return response.data;
}

const createInmueble = async (inmueble) => {
    const response = await Post(path, inmueble);
    if(response.error){
        removeLocalToken();
        return null;
    }
    return response.data;
}

const updateInmueble = async (inmueble) => {
    const response = await Put(`${path}`, inmueble);
    if(response.error){
        removeLocalToken();
        return null;
    }
    return response.data;
} 

const deleteInmueble = async (id) => {
    const response = await Delete(`${path}?id=${id}`);
    if(response.error){
        removeLocalToken();
        return null;
    }
    return response.data;
}

export { findAllInmueble, createInmueble, updateInmueble, deleteInmueble }