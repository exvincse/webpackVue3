'use strict';
import api from '../../../commonJs/apiHandler';
import url from '../../api/index';
export default {
    jsonPosts(params) {
        return api.post(url.f02.jsonPosts, params);
    }
}