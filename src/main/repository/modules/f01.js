'use strict';
import api from '../../../commonJs/apiHandler';
import url from '../../api/index';
export default {
    getData(params) {
        return api.get(url.f01.getdata, params);
    }
}