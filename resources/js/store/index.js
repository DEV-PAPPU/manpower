import Vue from 'vue';
import Vuex from 'vuex'
Vue.use(Vuex)
import router from '../router/route'

const store = new Vuex.Store({
    state: {
      user:[],
      authenticated:false,
      userRole:'',
      loading:false,
      superAdmin:false,
      accountUser:false,
      adminUser:false,
      dataentryUser:false,
      Toast:'',
      Toastmassage:'',
      visaFormdata:[],
      print:[]
    },
    getters: {
      get_Loading(state){
        return state.loading;
      },
      getUser(state){
        return state.user;
      },
      getAuthenticated(state){
          return state.authenticated;
      },

      Get_TOAST: state => {
          return state.Toast;
      },
      Get_TOAST_MASSAGE: state => {
          return state.Toastmassage;
      },
      Get_VisaFormdata: state => {
          return state.visaFormdata;
      },
    },
    mutations:{
        SET_LOADING(state, data){
            state.loading = data;
        },
        SET_USER(state, data){
            state.user = data;
        },
        SET_AUTHENTICATED(state,data){
            state.authenticated = data;
        },
        SET_TOAST(state,data){
            state.Toast = data;
        },
        SET_TOAST_MASSAGE(state,data){
            state.Toastmassage = data;
        },
        SET_VisaFormdata(state,data){
            state.visaFormdata = data;
        },
        SET_UserRole(state,data){
            state.userRole = data;
        },

        SET_superAdmin(state,data){
            state.superAdmin = data;
        },
        SET_adminUser(state,data){
            state.adminUser = data;
        },
        SET_accountUser(state,data){
            state.accountUser = data;
        },
        SET_dataentryUser(state,data){
            state.dataentryUser = data;
        },

        SET_Print(state,data){
         
          let alldata =   state.print;
          
          alldata.push(data)

          state.print = alldata
          

        },
    },
    actions:{
      authUser ({ commit, dispatch }) {
        commit('SET_AUTHENTICATED', true)
          
        let token = localStorage.getItem('token');

        return axios.get('user',{ 
            headers: {"Authorization" : `Bearer ${token}`} 
         }).then(res => {
            
            commit('SET_USER', res.data)

            if(res.data.role == 'superadmin'){
                commit('SET_superAdmin', true);
            }

            if(res.data.role == 'admin'){
                commit('SET_adminUser', true);
            }

            if(res.data.role == 'account'){
                commit('SET_accountUser', true);
            }

            if(res.data.role == 'dataentry'){
                commit('SET_dataentryUser', true);
            }


        }).catch(() => {
            commit('SET_AUTHENTICATED', false)

            if(router.currentRoute.name !== 'login'){
                router.push({ name: 'Login' })
            };
        })
      },

    },




  })

export default store;

// state data seen to using getters and also using getMassage() function

// mutations set data into state and then this data return on getters function;

// auth(login)->mutations(SET_USER)->state(user)->gutters(getUser)->dashboard(index)
