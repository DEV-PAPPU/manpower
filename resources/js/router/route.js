import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    linkExactActiveClass: 'active',
    routes: [

            {
                path: '/',
                name: 'Dashboard',
                component: () => import("../components/Layouts/Layout.vue"),
            
                beforeEnter: (to, from, next) => {

                    if(store.state.authenticated){
                        next();
                    }else{
                        return next({ name: 'Login'});
                    }
                },

                children:
                 [
                    {
                        path: '/user-management',
                        name: 'UserManagement',
                        component: () => import("../components/Pages/UserManagement/Index.vue"),
                    },
                    {
                        path: '/district',
                        name: 'District',
                        component: () => import("../components/Pages/District/Index.vue"),
                    },
                    {
                        path: '/add-user',
                        name: 'AddUser',
                        component: () => import("../components/Pages/UserManagement/Add.vue"),
                    },
                    {
                        path: '/companies',
                        name: 'Companies',
                        component: () => import("../components/Pages/Company/Index.vue"),
                    },
                    {
                        path: '/add/company',
                        name: 'AddCompany',
                        component: () => import("../components/Pages/Company/Add.vue"),
                    },
                    {
                        path: '/company-edit/:id',
                        name: 'company-edit',
                        component: () => import("../components/Pages/Company/Edit.vue"),
                    },
                    {
                        path: '/Passengers',
                        name: 'PassengerList',
                        component: () => import("../components/Pages/Passenger/Index.vue"),
                    },
                    {
                        path: '/Passenger/add',
                        name: 'AddPassenger',
                        component: () => import("../components/Pages/Passenger/Add.vue"),
                    },

                    {
                        path: '/Agent',
                        name: 'AgentList',
                        component: () => import("../components/Pages/Agent/Index.vue"),
                    },
                    {
                        path: '/Agent-edit/:id',
                        name: 'AgentEdit',
                        component: () => import("../components/Pages/Agent/Edit.vue"),
                    },
                    {
                        path: '/AgentEntry',
                        name: 'AgentEntry',
                        component: () => import("../components/Pages/Agent/Add.vue"),
                    },
                    {
                        path: '/Sector',
                        name: 'Sector',
                        component: () => import("../components/Pages/Sector/Index.vue"),
                    },
                    {
                        path: '/addRequisition',
                        name: 'addRequisition',
                        component: () => import("../components/Pages/Requisition/Add.vue"),
                    },
                    {
                        path: '/Requisitions',
                        name: 'RequisitionList',
                        component: () => import("../components/Pages/Requisition/Index.vue"),
                    },

                 ]
            },

            {
                path: '/login',
                name: 'Login',
                component: () => import("../components/Auth/Login.vue"),
            },
            {
                path: '/test',
                name: 'Test',
                component: () => import("../components/Test.vue"),
            },
            

    ]
});

export default routes;

