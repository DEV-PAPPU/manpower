import Vue from 'vue';

import store from '../store/index';

import Passwordreset from "../components/Auth/Passwordreset.vue";

export default [

              {
                path: '/Passwordreset',
                name: 'Passwordreset',
                component: Passwordreset,

                beforeEnter: (to, from, next) => {

                    if(!store.state.authenticated){
                        next();
                    }else{
                        return next({ name: 'Dashboard'});
                    }
                },
            
                },



    ]






