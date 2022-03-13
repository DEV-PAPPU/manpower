import Vue from 'vue';

import store from '../store/index';
// import PassportStatusManage from "../components/Pages/PassportManagment/Index.vue";

// import NotFound from "../components/Pages/NotFound/NotFound.vue";

// import Account from "../components/Pages/Account/Index.vue";
import AddUser from "../components/Pages/UserManagement/Add.vue";

export default [

              {
                path: '/pp',
                name: 'p',
                component: () => import("../components/Test.vue"),

                beforeEnter: (to, from, next) => {

                    if(store.state.authenticated){
                        next();
                    }else{
                        return next({ name: 'Login'});
                    }
                },
            
                },



    ]






