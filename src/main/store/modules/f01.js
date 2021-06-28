'use strict';
import api from '../../repository/index';
const state = {
    jsonUsersData: []
}

const getters = {}

const mutations = {
    setJsonUsers(state, payload) {
        state.data = payload || [];
    }
}

const actions = {
    async jsonUsers({ commit }, params) {
        let res = await api.f01.jsonUsers(params);
        commit('setJsonUsers', res.data);
        return res.data;
    },
    async test({ commit }, params) {
        let res = await api.f01.test(params);
        return res;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}