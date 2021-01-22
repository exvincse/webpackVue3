'use strict';
import api from '../../../commonJs/apiHandler';
import url from '../../api/index';
// import Axios from "axios";
export default {
    async jsonUsers() {
        let res = await api.get(url.f01.jsonUsers);
        return res.data;
    },
    // async jsonUsers() {
    //     const instance = Axios.create({
    //         // baseURL: '',
    //         baseURL: process.env.apiBaseUrl,
    //         timeout: 0,
    //         withCredentials: true
    //     });
    //     let res = await instance.get('https://jsonplaceholder.typicode.com/users');
    //     return res.data
    // }
}