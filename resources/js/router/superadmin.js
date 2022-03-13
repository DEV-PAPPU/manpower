import Vue from 'vue';

import store from '../store/index';
import UserManagement from "../components/Pages/UserManagement/Index.vue";
import AddUser from "../components/Pages/UserManagement/Add.vue";
import UserEdit from "../components/Pages/UserManagement/Edit";

import Trade from "../components/Pages/Trade/Index.vue";

export default [

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
            component: UserManagement,
    
            beforeEnter: (to, from, next) => {
    
                if(store.state.superAdmin){
                    next();
                }else{
                    return next({ name: 'NotFound'});
                }
            },
           },

           {
            path: '/add-user',
            name: 'AddUser',
            component: AddUser,
    
            beforeEnter: (to, from, next) => {
    
                if(store.state.superAdmin){
                    next();
                }else{
                    return next({ name: 'NotFound'});
                }
            },
        },

        {
            path: '/trade',
            name: 'Trade',
            component: Trade,
    
            beforeEnter: (to, from, next) => {
    
                if(store.state.superAdmin){
                    next();
                }else{
                    return next({ name: 'NotFound'});
                }
            },
        },
        
        {
            path: '/edit/user/:id',
            name: 'UserEdit',
            component: UserEdit,
    
            beforeEnter: (to, from, next) => {
    
                if(store.state.superAdmin){
                    next();
                }else{
                    return next({ name: 'NotFound'});
                }
            },
        },
       ]

        
    },
   
    



    ]






