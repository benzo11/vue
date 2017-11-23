import Vue from 'vue'
import VueRouter from 'vue-router'
import vClickOutside from 'v-click-outside'

// Plugins
import GlobalComponents from './gloablComponents'
import Notifications from './components/UIComponents/NotificationPlugin'
import SideBar from './components/UIComponents/SidebarPlugin'
import App from './App.vue'

// router setup
import routes from './routes'

// library imports
import Chartist from 'chartist'
require('./bootstrap');

// plugin setup
Vue.use(VueRouter);
Vue.use(GlobalComponents);
Vue.use(vClickOutside);
Vue.use(Notifications);
Vue.use(SideBar);

// configure router
const router = new VueRouter({
    routes, // short for routes: routes
    linkActiveClass: 'active',
});

// global library setup
Object.defineProperty(Vue.prototype, '$Chartist', {
    get () {
        return this.$root.Chartist
    }
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App),
    router,
    data: {
        Chartist: Chartist
    }
})
