import axios from "axios";

import Storage from "./Storage";
import config from "./config";

export default class Auth {
    async login(username, password) {

        const storage = new Storage();
        try {
            const response = await axios.post(`${config.api_url}/Auth/Login`, { username, password }).then((res) => { return res.data; });
            const otp = await axios.post(`${config.api_url}/Auth/Authorize/${response.Title}`).then((res) => { return res.data; });
            const { Data } = otp;
            storage.set("token", Data);
            return otp;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async register(email, firstName, lastName, username, password) {
        try {
            const response = await axios.post(`${config.api_url}/Auth/register`, {
                email, firstName, lastName, username, password
            });
            const { data } = response;
            return data;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async authorize(otp) {
        try {
            const storage = new Storage();
            const otp = await axios.post(`${config.api_url}/Auth/Authorize/${otp}`)
            const { token } = otp.data;
            storage.set("token", token);
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }

    async logout() {
        try {
            const storage = new Storage();
            await axios.post(`${config.api_url}/Auth/Logout`, null, {
                headers: {
                    Authorization: `Bearer ${storage.get("token")}`
                }
            });
            storage.remove("token");
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
