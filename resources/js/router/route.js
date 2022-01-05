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
                        path: '/Passenger/add',
                        name: 'AddPassenger',
                        component: () => import("../components/Pages/Passenger/Add.vue"),
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

