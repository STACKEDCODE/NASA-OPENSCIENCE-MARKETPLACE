import axios from 'axios';
import config from '../config';

import Storage from '../Storage';

export async function getProject(id) {
    const storage = new Storage();
    try {
        const response = await axios.get(`${config.api_url}/Project/${id}`,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { console.log(res); return res.data; });
        const data = await response.Data;
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}

export async function createProject(data) {
    const storage = new Storage();
    try {
        const response = await axios.post(`${config.api_url}/Project`, data,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { console.log(res); return res.data; });
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}