import Vue from 'vue'
import axios from 'axios'
import vClickOutside from 'v-click-outside'

import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App.vue'

import router from './routes'
import store from './store/index.js'
import Chartist from 'chartist'

require('./bootstrap');

Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
    get () {
        return this.$root.Chartist
    }
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    axios,
    store,
    data: {
        Chartist: Chartist
    }
});
