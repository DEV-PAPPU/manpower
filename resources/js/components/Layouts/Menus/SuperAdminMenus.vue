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
 

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Management</span>
            </a>
            <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Data Management :</h6>
                    <router-link :to="{name: 'AddPassenger'}" class="collapse-item">Add Passenger</router-link>
                    <router-link :to="{name: 'PassengerList'}" class="collapse-item">Passenger List</router-link>
                    <router-link :to="{name: 'AgentList'}" class="collapse-item">Agent</router-link>
                    <router-link :to="{name: 'Companies'}" class="collapse-item">Company List</router-link>
                    <router-link :to="{name: 'addRequisition'}" class="collapse-item">Add Requisition</router-link>
                </div>
            </div>
        </li>

            <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#InfocollapsePages"
                aria-expanded="true" aria-controls="InfocollapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Info Management</span>
            </a>
            <div id="InfocollapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Info Management:</h6>
                    <router-link :to="{name: 'PassportList'}" class="collapse-item">Passenger Status</router-link>
                    <router-link :to="{name: 'InterviewEntry'}" class="collapse-item">Interview Entry</router-link>
                    <router-link :to="{name: 'STMLIST'}" class="collapse-item">STM LIST</router-link>
                    <router-link :to="{name: 'MPLIST'}" class="collapse-item">MP RCV</router-link>
                    <router-link :to="{name: 'TKTLists'}" class="collapse-item">TKT Lists</router-link>
                </div>
            </div>
        </li>


        <!-- Nav Item - Account Menu -->
        <li class="nav-item active">
            <router-link :to="{name: 'Account'}" class="nav-link"><i class="fas fa-fw fa-folder"></i>
                <span>Account</span></router-link>
        </li>

        <!-- <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#account"
                aria-expanded="true" aria-controls="account">
               <i class="fas fa-fw fa-folder"></i>
                <span>Account</span>
            </a>
            <div id="account" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Components:</h6>
                    <router-link :to="{name: 'Account'}" class="collapse-item">Account</router-link>
                    <router-link :to="{name: 'Bank'}" class="collapse-item">Bank Lists</router-link>
                    <router-link :to="{name: 'Branch'}" class="collapse-item">Branch Lists</router-link>
                </div>
            </div>
        </li> -->

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
                <i class="fas fa-fw fa-cog"></i>
                <span>Report</span>
            </a>
            <div id="report" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Components:</h6>
                    <router-link :to="{name: 'STMReport'}" class="collapse-item">STM Report</router-link>
                </div>
            </div>
        </li>


         <!-- Heading -->
        <div class="sidebar-heading">
            All Settings
        </div>

        <!-- Nav Item - Pages Collapse Menu -->
        <li class="nav-item">
            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo"
                aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Seeting</span>
            </a>
            <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <h6 class="collapse-header">Custom Components:</h6>
                    <router-link :to="{name: 'UserManagement'}" class="collapse-item">User Management</router-link>
                    <router-link :to="{name: 'District'}" class="collapse-item">District</router-link>
                    <router-link :to="{name: 'Country'}" class="collapse-item">Country Lists</router-link>
                    <router-link :to="{name: 'Sector'}" class="collapse-item">Sector Lists</router-link>
                    <router-link :to="{name: 'Bank'}" class="collapse-item">Bank Lists</router-link>
                    <router-link :to="{name: 'Branch'}" class="collapse-item">Branch Lists</router-link>
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