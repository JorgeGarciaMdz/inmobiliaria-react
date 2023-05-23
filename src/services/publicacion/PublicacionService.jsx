import { GetPublic } from "..";

const path = '/publicacion'

const findAll = async () => {
    const resp = await GetPublic(path);
    return resp.data;
}

export { findAll }