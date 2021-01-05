"use strict";
import Axios from "axios";
const instance = Axios.create({
    baseURL: '',
    timeout: 0,
    withCredentials: true
});
// axios contentType default json
let Api = {
    token: '',
    setToken: function (name) {
        this.token = name;
    },
    config: () => {
        let headers = {};
        let config = {}
        headers.token = Api.token;
        if (config.hasOwnProperty("contentType")) {
            headers["contentType"] = config.contentType;
        }

        if (config.hasOwnProperty("responseType")) {
            headers["responseType"] = config.responseType;
        } else {
            headers["responseType"] = "json";
        }
        return headers;
    },
    post: (url, params) => {
        return instance.post(url, params).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
    postFile: (url, params) => {
        let setting = Api.config({ contentType: "multipart/form-data" });
        return instance.post(url, params, setting).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
    downloadFile: (url, params) => {
        return instance.post(url, params).then((res) => {

        }).catch((err) => {
            console.log(err);
        });
    },
    get: (url) => {
        console.log(Api.config())
        return instance.get(url).then(res => {
            return res;
        }).catch(err => {
            return err;
        });
    },
    all: (url) => {
        return Axios.all(url).then((res) => {
            return res;
        }).catch((err) => {
            console.log(err);
        });
    },
};
instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

instance.interceptors.response.use(
    (success) => {
        if (success.status == 200) {
            return Promise.resolve(success);
        }
        return success;
    },
    (err) => {
        switch (err.response.status) {
        case 400:
            console.log("URL ERROR");
            break;
        case 401:
            console.log("未登入");
            break;
        case 403:
            console.log("請重新登入");
            break;
        case 404:
            console.log("請求不存在");
            break;
        }
        // console.log(Promise.reject(err))
        $("html").removeClass("black");
        return Promise.reject(err);
    }
);

export default Api;
