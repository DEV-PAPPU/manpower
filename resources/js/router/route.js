import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import PassportStatusManage from "../components/Pages/PassportManagment/Index.vue";
import CompanyList from "../components/Pages/Company/Index.vue";
import AddCompany from "../components/Pages/Company/Add.vue";
import EditCompany from "../components/Pages/Company/Edit.vue";
import UserManagement from "../components/Pages/UserManagement/Index.vue";
import DistrictList from "../components/Pages/District/Index.vue";
import AddUser from "../components/Pages/UserManagement/Add.vue";
import UserEdit from "../components/Pages/UserManagement/Edit";
import SectorList from "../components/Pages/Sector/Index.vue";
import MofaInformationlist from "../components/Pages/MofaInformation/Index.vue";
import MofaEntry from "../components/Pages/MofaInformation/Add.vue";
import STMLIST from "../components/Pages/STM/Index.vue";
import AddSTM from "../components/Pages/STM/Add.vue";

import PassengerFile from "../components/Pages/Passenger/PassengerInfo/Index.vue";
import AddPassengerFile from "../components/Pages/Passenger/PassengerInfo/Add.vue";

import ManPowerList from "../components/Pages/ManPowerManage/Index.vue";
import AddManPower from "../components/Pages/ManPowerManage/Add.vue";

import TKTList from "../components/Pages/TKT/Index.vue";
import AddTKT from "../components/Pages/TKT/Add.vue";

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
                        component: UserManagement,
                    },
                    {
                        path: '/district',
                        name: 'District',
                        component: DistrictList,
                    },
                    {
                        path: '/add-user',
                        name: 'AddUser',
                        component: AddUser,
                    },
                    {
                        path: '/edit-user/:id',
                        name: 'UserEdit',
                        component: UserEdit,
                    },
                    {
                        path: '/companies',
                        name: 'Companies',
                        component: CompanyList,
                    },
                    {
                        path: '/add/company',
                        name: 'AddCompany',
                        component: AddCompany,
                    },
                    {
                        path: '/company-edit/:id',
                        name: 'company-edit',
                        component: EditCompany,
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
                        path: '/passenger-edit/:id',
                        name: 'PassengerEdit',
                        component: () => import("../components/Pages/Passenger/Edit.vue"),
                    },
                    {
                        path: '/Passenger/file/:id',
                        name: 'PassengerFile',
                        component: PassengerFile,
                    },
                    {
                        path: '/Passenger/file/add/:id',
                        name: 'AddPassengerFile',
                        component: AddPassengerFile,
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
                        component: SectorList,
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
                    {
                        path: '/Edit/Requisitions/:id',
                        name: 'EditRequisition',
                        component: () => import("../components/Pages/Requisition/Edit.vue"),
                    },
                    {
                        path: '/Requisition/visa-trade/:id',
                        name: 'RequisitionVisa',
                        component: () => import("../components/Pages/VisaInfo/SingleTrade.vue"),
                    },
                    {
                        path: '/MofaInformation',
                        name: 'MofaInformationlist',
                        component: MofaInformationlist,
                    },
                    {
                        path: '/Mofa/Enter',
                        name: 'MofaEntry',
                        component: MofaEntry,
                    },
                    {
                        path: '/Mofa/edit/:id',
                        name: 'MofaEdit',
                        component: () => import("../components/Pages/MofaInformation/Edit.vue"),
                    },

                    {
                        path: '/Passports',
                        name: 'PassportList',
                        component: PassportStatusManage,
                    },
                    {
                        path: '/Passport/add',
                        name: 'PassportAdd',
                        component: () => import("../components/Pages/PassportManagment/Add.vue"),
                    },
                    {
                        path: '/Stms',
                        name: 'STMLIST',
                        component: STMLIST,
                    },
                    {
                        path: '/Stm/entry',
                        name: 'STMAdd',
                        component: AddSTM,
                    },
                    {
                        path: '/manpower',
                        name: 'MPLIST',
                        component: ManPowerList,
                    },
                    {
                        path: '/manpower/entry',
                        name: 'MPAdd',
                        component: AddManPower,
                    },
                    {
                        path: '/tkts',
                        name: 'TKTLists',
                        component: TKTList,
                    },
                    {
                        path: '/tkt/add',
                        name: 'TKTAdd',
                        component: AddTKT,
                    },
                    {
                        path: '/interview/entry',
                        name: 'InterviewEntry',
                        component: () => import("../components/Pages/Interview/Add.vue"),
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

