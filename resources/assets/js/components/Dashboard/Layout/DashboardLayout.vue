<template>
    <div class="wrapper">
        <side-bar type="sidebar" :sidebar-links="$sidebar.sidebarLinks">

        </side-bar>
        <notifications>

        </notifications>
        <div class="main-panel"  :class="{ 'not-logged-in' : !isLoggedIn }">
            <top-navbar></top-navbar>

            <dashboard-content @click.native="toggleSidebar">

            </dashboard-content>

            <content-footer></content-footer>
        </div>
    </div>
</template>
<style lang="scss">
    .not-logged-in {
        width: 100% !important;
    }
</style>
<script>
    import TopNavbar from './TopNavbar.vue'
    import ContentFooter from './ContentFooter.vue'
    import DashboardContent from './Content.vue'

    import store from '../../../store/index'

    export default {
        components: {
            TopNavbar,
            ContentFooter,
            DashboardContent
        },
        methods: {
            toggleSidebar () {
                if (this.$sidebar.showSidebar) {
                    this.$sidebar.displaySidebar(false)
                }
            }
        },
        computed: {
            isLoggedIn () {
                return this.$store.state.loggedIn;
            },
        }

    }

</script>
