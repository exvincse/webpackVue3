'use strict';
import api from '../../../commonJs/apiHandler';
import url from '../../api/index';
export default {
    jsonUsers() {
        let res = api.get(url.f01.jsonUsers);
        return res;
    }
}