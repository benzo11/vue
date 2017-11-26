/**
 * Created by benzo on 25. 11. 2017.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
    loggedIn: !!localStorage.getItem('token'),
    user: {
        token: null,
        username: null,
        email: null,
        type: null
    }
};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters: {
        someGetter (state, getters, rootState, rootGetters) {
            console.log(getters);
            return state.token;
        }
    }
});