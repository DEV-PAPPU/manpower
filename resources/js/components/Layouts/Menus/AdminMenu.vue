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
        <li class="nav-item active">
            <router-link :to="{name: 'Dashboard'}" class="nav-link"><i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></router-link>
            
        </li>

        <!-- Nav Item - Account Menu -->
        <li class="nav-item">
            <router-link :to="{name: 'PassportList'}" class="nav-link"><i class="fas fa-users"></i>
                <span>Passenger Status</span></router-link>
        </li>


        <!-- Nav Item - Account Menu -->
        <li class="nav-item">
            <router-link :to="{name: 'Account'}" class="nav-link"><i class="fas fa-money-bill"></i>
                <span>Account</span></router-link>
        </li>


        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Heading -->
        <div class="sidebar-heading">
            All Report
        </div>



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