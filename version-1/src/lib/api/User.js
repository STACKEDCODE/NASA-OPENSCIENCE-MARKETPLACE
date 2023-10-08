import axios from 'axios';
import config from '../config';

import Storage from '../Storage';

export async function getMyInfo() {
    const storage = new Storage();
    try {
        const response = await axios.get(`${config.api_url}/User/@me`,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { return res.data; });
        const data = await response.Data;
        return data;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}