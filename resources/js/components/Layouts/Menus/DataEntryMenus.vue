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

        <!-- Divider -->
        <hr class="sidebar-divider">

        <!-- Nav Item - Account Menu -->
        <li class="nav-item">
            <router-link :to="{name: 'AddPassenger'}" class="nav-link"><i class="fas fa-users"></i>
                <span>Add Passenger</span></router-link>
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