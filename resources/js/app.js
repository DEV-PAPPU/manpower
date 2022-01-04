/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
import router from './router/route';
import store from './store/index';
// global.jQuery = require('jquery');
// var $ = global.jQuery;
// window.$ = $;
window.Vue = require('vue').default;
window.axios = require('axios');
window.axios.defaults.baseURL = '/api/';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('main-component', require('./App.vue').default);

// mixin
Vue.mixin
   ({
    computed:{
            Authenticated(){
                return  this.$store.getters.getAuthenticated;
            },

            currentRouteName() {
                return this.$route.name;
            },

            AuthUser(){
                return  this.$store.getters.getUser;
            },

            Loading(){
                return  this.$store.getters.get_Loading;
            },
            websiteaddress(){
                return  'http://ecommerce.test/';
            },
            url(){
                return  'http://ecommerce.test/';
            },

            // Tost(){
            //     return  this.$store.getters.Get_TOST;
            // },
        },

    })


 let auth = localStorage.getItem("token");

 if(auth){
     // Load With Auth systm
     store.dispatch('authUser').then(() => {
         const app = new Vue({
             el: '#app',
             router : router,
             store,
         });
     });
 }else {
 
     const app = new Vue({
         el: '#app',
         router : router,
         store,
     });
 }
 