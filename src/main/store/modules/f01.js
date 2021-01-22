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
    async jsonUsers({ commit }) {
        let res = await api.f01.jsonUsers();
        commit('setJsonUsers', res.data);
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