'use strict';
import axios from 'axios';
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
        console.log(123)
        const url = "https://jsonplaceholder.typicode.com/users";
        let res = await axios.get(url);
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