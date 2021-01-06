'use strict';
import api from '../../../commonJs/apiHandler';
import url from '../../api/index';
export default {
    jsonUsers(params) {
        return api.get(url.f01.jsonUsers, params);
    }
}