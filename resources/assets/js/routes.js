import Vue from 'vue'
import VueRouter from 'vue-router'

import DashboardLayout from './components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from './components/GeneralViews/NotFoundPage.vue'

// Admin pages
import Overview from './components/Dashboard/Views/Overview.vue'
import UserProfile from './components/Dashboard/Views/UserProfile.vue'
import Notifications from './components/Dashboard/Views/Notifications.vue'
import Icons from './components/Dashboard/Views/Icons.vue'
import Maps from './components/Dashboard/Views/Maps.vue'
import Typography from './components/Dashboard/Views/Typography.vue'
import TableList from './components/Dashboard/Views/TableList.vue'
import Login from './components/UIComponents/LoginPlugin/Login.vue'
// plugin setup
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/admin/overview',
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: '/admin/stats',
        meta: {
            requireAuth: true
        },
        children: [
            {
                path: 'overview',
                name: 'overview',
                component: Overview,
                meta: {
                    requireAuth: true
                }
            },
            {
                path: 'stats',
                name: 'stats',
                component: UserProfile
            },
            {
                path: 'notifications',
                name: 'notifications',
                component: Notifications
            },
            {
                path: 'icons',
                name: 'icons',
                component: Icons
            },
            {
                path: 'maps',
                name: 'maps',
                component: Maps
            },
            {
                path: 'typography',
                name: 'typography',
                component: Typography
            },
            {
                path: 'table-list',
                name: 'table-list',
                component: TableList
            }
        ],
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {path: '*', component: NotFound}
];

// configure router
const router = new VueRouter({
    routes,
    linkActiveClass: 'active',
});


//check for token AUTH
router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token');

    if (to.meta.requireAuth) {
        if (token !== null) {
            next();
        } else {
            next({
                path: '/login'
            });
        }
    } else {
        next();
    }
});

export default router
