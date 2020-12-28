'use strict';
import axios from 'axios';

export default {
    get: function(url, params) {
        return axios.get(url, params).then((res) => {
            return res;
        }).catch((error) => {
            return error;
        })
    }
}