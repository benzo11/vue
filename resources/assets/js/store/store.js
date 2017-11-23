const Vue = require('vue');
const Vuex = require('vuex');

Vue.use(Vuex);

export function increment({ dispatch }) {
    dispatch('INCREMENT_VALUE');
}

export const getCount = (state) => {
    return state.count;
};
const state = {
    count: 0
};

const mutations = {
    INCREMENT_VALUE(state) {
        state.count++;
    }
};

export default new Vuex.Store({
    state,
    mutations
});