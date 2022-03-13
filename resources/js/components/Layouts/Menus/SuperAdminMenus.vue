<template>
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center" href="#">
            <div class="sidebar-brand-icon rotate-n-15">
                <i class="fas fa-laugh-wink"></i>
            </div>
            <div class="sidebar-brand-text mx-3">{{AuthUser.name}}.</div>
        </a>

        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->
        <li class="nav-item">
            <router-link :to="{name: 'Dashboard'}" class="nav-link"><i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></router-link>
            
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">
 

         <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#primirimenu"
                aria-expanded="true" aria-controls="primirimenu">
                <i class="fas fa-cogs"></i>
                <span>Primary Setup</span>
            </a>
            <div id="primirimenu" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                  <router-link :to="{name: 'PassengerList'}" class="collapse-item">Passenger</router-link>
                  <router-link :to="{name: 'AgentList'}" class="collapse-item">Agent</router-link>
                 <router-link :to="{name: 'Companies'}" class="collapse-item">Company </router-link>
                 <router-link :to="{name: 'Trade'}" class="collapse-item">Trade</router-link>
                 <router-link :to="{name: 'addRequisition'}" class="collapse-item">Add Requisition</router-link>

                </div>
            </div>
        </li>

         <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#InfocollapsePages"
                aria-expanded="true" aria-controls="InfocollapsePages">
                <i class="fas fa-sliders-h"></i>
                <span>Processing Setup</span>
            </a>
            <div id="InfocollapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <!-- <h6 class="collapse-header">Processing Setup:</h6> -->
                    <router-link :to="{name: 'PassportList'}" class="collapse-item">Passenger Status</router-link>
                    <router-link :to="{name: 'STMLIST'}" class="collapse-item">Stamping</router-link>
                    <router-link :to="{name: 'MPLIST'}" class="collapse-item">Manpower</router-link>
                    <router-link :to="{name: 'TKTLists'}" class="collapse-item">Ticketing</router-link>
                </div>
            </div>
        </li>


        <!-- Nav Item - Account Menu -->
        <li class="nav-item">
            <router-link :to="{name: 'Print'}" class="nav-link"><i class="fas fa-edit fa-print"></i>
                <span>Print</span></router-link>

        </li>
        <li class="nav-item">
            <router-link :to="{name: 'Account'}" class="nav-link"><i class="fas fa-money-bill"></i>
                <span>Account</span></router-link>
        </li>

        <!-- Divider -->
        <hr class="sidebar-divider">


        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#report"
                aria-expanded="true" aria-controls="report">
                <i class="fas fa-users"></i>
                <span>Report</span>
            </a>
            <div id="report" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link :to="{name: 'InterviewReport'}" class="collapse-item">Interview Selection</router-link>
                    <router-link :to="{name: 'CompanyReport'}" class="collapse-item">Company Report</router-link>
                    <router-link :to="{name: 'STMReport'}" class="collapse-item">Stamping Report</router-link>
                    <router-link :to="{name: 'MPReport'}" class="collapse-item">Manpower Report</router-link>
                    <router-link :to="{name: 'TKTReport'}" class="collapse-item">Ticketing Report</router-link>
                </div>
            </div>
        </li>



        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Settings</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link :to="{name: 'Country'}" class="collapse-item">Country </router-link>
                    <router-link :to="{name: 'Sector'}" class="collapse-item">Sector </router-link>
                    <router-link :to="{name: 'Bank'}" class="collapse-item">Bank </router-link>
                    <router-link :to="{name: 'Branch'}" class="collapse-item">Branch </router-link>
                </div>
            </div>
        </li>


        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseThree"
                aria-expanded="true" aria-controls="collapseThree">
                <i class="fas fa-user-edit"></i>
                <span>Admin User</span>
            </a>
            <div id="collapseThree" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <router-link :to="{name: 'UserManagement'}" class="collapse-item">Manage User</router-link>
                    <router-link :to="{name: 'AddUser'}" class="collapse-item">Create User</router-link>
                </div>
            </div>
        </li>

        

        <!-- Nav Item - Tables -->
        <li class="nav-item">
            <a @click="logout" class="nav-link" href="#">
                <i class="fas fa-sign-out-alt"></i>
                <span>Logout</span></a>
        </li>

    </ul>
</template>

<script>
import axios from 'axios'
    export default {

    methods :{

        logout(){
            let token = localStorage.getItem('token');

            axios.get('logout',{ 
            headers: {"Authorization" : `Bearer ${token}`} 
             }).then(res => {
            
            this.$store.commit('SET_AUTHENTICATED', false);
                    this.$store.commit('SET_USER', '');
                    localStorage.removeItem("token");
                    this.$router.push({name:'Login'});

        })

        }
    },
    }
</script>