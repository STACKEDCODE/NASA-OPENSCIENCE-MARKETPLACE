export default class Storage {
    constructor() {
        this.token = this.get("token");
    }
    get(key) {
        if (typeof window !== "undefined") {
            return window.sessionStorage.getItem(key);
        }
    }
    set(key, value) {
        if (typeof window !== "undefined") {
            window.sessionStorage.setItem(key, value);
        }
    }
    remove(key) {
        if (typeof window !== "undefined") {
            window.sessionStorage.removeItem(key);
        }
    }
}
