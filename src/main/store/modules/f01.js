'use strict';
import api from '../../repository/index';
const state = {
    data: []
}

const getters = {}

const mutations = {
    setStoreA(state, payload) {
        state.data = payload || [];
    }
}

const actions = {
    async storeA({ commit }, params) {
        let res = await api.f01.getData(params);
        commit('setStoreA', res.data);
        return res.data;
    },
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}