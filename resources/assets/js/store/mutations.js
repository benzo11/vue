/**
 * Created by benzo on 25. 11. 2017.
 */

import * as types from './types'

const mutations = {
    [types.LOGIN]: (state, data) => {
        localStorage.setItem('token', data.token);

        state.user.email = data.email;

        state.token = data.token;
        state.loggedIn = true;
    },
    [types.LOGOUT]: (state) => {
        localStorage.removeItem('token');
        state.token = null;
        state.loggedIn = false;
    }
};
export default mutations