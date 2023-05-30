import { GetPublic } from "..";

const path = '/publicacion/public'

const findAll = async () => {
    const resp = await GetPublic(path);
    return resp.data;
}

const findById = async (id) => {
    const resp = await GetPublic(`${path}/${id}`);
    return resp.data;
}

export { findAll, findById }