import axios from "axios";

const config = {
    baseURL: "http://127.0.0.1:8080/v1",
    headers: {
        "content-type": "application/json"
    }
}

const instanceAxios = axios.create(config);

const Get = async (path) => {
    const response = {}
    await instanceAxios
            .get(`${path}`)
            .then( res => ( response.data = res.data))
            .catch( err => (response.error = err))
    return response;
}

export { Get }
