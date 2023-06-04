import axios from "axios";
import { getLocalToken } from "./auth";

const config = {
    baseURL: "http://127.0.0.1:8080/v1",
    headers: {
        Authorization: `Bearer ${getLocalToken()}`,
        "Access-Control-Allow-Origin": "*",
    }
};

const instanceAxios = axios.create(config);

const Get = async (path) => {
    const response = {}
    await instanceAxios
        .get(`${path}`)
        .then(res => {
            response.data = res.data;
        })
        .catch(err => (response.error = err))
    return response;
}

const Post = async (path, body) => {
    const response = {}
    await instanceAxios
        .post(`${path}`, body)
        .then(res => (response.data = res.data))
        .catch(err => (response.error = err))
    return response;
}

const Put = async (path, body) => {
    const response = {}
    await instanceAxios
        .put(`${path}`, body)
        .then(res => (response.data = res.data))
        .catch(err => (response.error = err))
    return response;
}

const Delete = async (path) => {
    const response = {}
    await instanceAxios
        .delete(`${path}`)
        .then(res => (response.data = res.data))
        .catch(err => (response.error = err))
    return response;
}

export { Get, Post, Put, Delete }
