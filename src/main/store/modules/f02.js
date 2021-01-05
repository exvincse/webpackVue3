'use strict';
import api from '../../repository/index';
const state = {
    jsonPostsData: []
}

const getters = {}

const mutations = {
    setJsonPosts(state, payload) {
        state.data = payload || [];
    }
}

const actions = {
    async jsonPosts({ commit }, params) {
        let res = await api.f02.jsonPosts(params);
        commit('setJsonPosts', res.data);
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