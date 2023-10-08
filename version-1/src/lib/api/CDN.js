import axios from 'axios';

import Storage from '../Storage';

export async function uploadIcon(file) {
    const storage = new Storage();
    const formData = new FormData();
    formData.append("file", file);

    try {
        const response = await axios.post(`https://api.science-interlinked.us/Upload/Icon`, formData,
            {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            }
        ).then((res) => { return res.data; });
        return response;
    }
    catch (error) {
        console.log(error);
        return error;
    }
}