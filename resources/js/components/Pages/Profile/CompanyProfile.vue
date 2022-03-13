<template>
    <div class="mt-4">
        <div class="row">
            <div class="col-xl-4">
                <!-- Profile picture card-->
                <div class="card mb-4 mb-xl-0">
                    <div class="text-white card-header">Company Profile</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="profile_image" :src="company.company_brand_logo" alt="">

                        <div class="card-body p-1-9 p-xl-5">
                            <div class="mt-2">
                                <h3 class="agent_info h4 mb-0"> {{company.company_name}}</h3>
                            </div>

                            <div class="mt-4">

                                <p class="agent_info my-3"><i class="far fa-envelope display-25 me-3 text-secondary"> </i>
                                    {{company.company_email}}</p>

                                <p class="agent_info "><i
                                        class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>{{company.company_phone}}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">



                <!-- Agent passenger card-->
                <div class="card mb-4">
                    <div class="text-white card-header d-flex flex-row align-items-center justify-content-between">
                        <span>Company Info</span>
                        <!-- <router-link :to="{name: 'Companies'}" class="btn btn-success btn-sm">Back To List</router-link> -->

                        <button @click="togglCompanyInfo" class="btn btn-light btn-sm">Show</button>

                    </div>
                    <div v-if="showlCompanyInfo" class="card-body">
                        <div >

                            <div class="database__table">
                                <table class="table table-hover table-bordered dbtable">
                                    <thead>
                                        <tr>
                                            <th style="width:100px">Address</th>
                                            <th style="width:100px">Contact Person</th>
                                            <th style="width:200px">Note</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{{company.company_address}}</td>
                                            <td>{{company.contact_person}}</td>
                                            <td>{{company.company_note}}</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>


                                <!-- Agent passenger card-->
                <div class="card mb-4">
                    <div class="text-white card-header d-flex flex-row align-items-center justify-content-between">
                        <span>Passenger Lists</span>
                        <button @click="togglePassenger" class="btn btn-light btn-sm">Show</button>
                    </div>
                    <div v-if="showPassenger" class="card-body">
                        <div v-if="passenger.length">

                            <div class="database__table">
                                <table class="table table-hover table-bordered dbtable">
                                    <thead>
                                        <tr>
                                            <!-- <th style="width:60px">S/L</th> -->
                                            <th style="width:100px">Passenger Name</th>
                                            <th style="width:100px">Passport No</th>
                                            <th style="width:100px">Passport Exp D</th>
                                            <th style="width:100px">Mobile</th>
                                            <!-- <th style="width:100px">District</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in passenger" :key="item.id">
                                            <!-- <td>{{item.id}}</td> -->
                                            <td>{{item.passenger_name}}</td>
                                            <td>{{item.passport_no}}</td>
                                            <td>{{item.passport_expire_date}}</td>
                                            <td>{{item.passenger_phone}}</td>
                                            <!-- <td>{{item.district_name}}</td> -->
                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                        </div>

                        <p v-else class="p-6">No Passenger</p>
                    </div>
                </div>

                <div class="card mb-4">
                    <div class="text-white card-header d-flex flex-row align-items-center justify-content-between">
                        <span>Company Visa Trade</span>
                        <!-- <button @click="togglePassenger" class="btn btn-light btn-sm">Show</button> -->
                    </div>
                    <div  class="card-body">
                        <div v-if="visa.length">

                            <div class="database__table">
                               <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>Visa No.</th>
                                    <th>Trade</th>
                                    <th>Trade Qty</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in visa" :key="item">
                                    <td>{{item.trade_visa_no}}</td>
                                    <td>{{item.trade}}</td>
                                    <td>{{item.trade_qty}}</td>
                                </tr>

                            </tbody>
                        </table>
                            </div>

                        </div>

                        <p v-else class="p-6">No data found</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios'
    export default {
        data: () =>{
            return {
               company: '',
                passenger:'',
               showPassenger: false,
               showlCompanyInfo: true,
               visa: ''
            }
        },

        methods:{

            togglePassenger(){
                 
                    this.showlCompanyInfo = false;
                    this.showPassenger = !this.showPassenger;

            },
            togglCompanyInfo(){
                    this.showPassenger = false;
                    this.showlCompanyInfo = !this.showlCompanyInfo;
            },


        },

        mounted() {

            let id = this.$route.params.id;
                      
            axios.get(`edit-company/${id}`).then(res =>{
                this.company = res.data.company;
                this.passenger = res.data.passenger;
            });

            axios.get(`company-visa-trade/${id}`).then(res =>{
                this.visa = res.data.visa;
                 setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 10,
                        // "scrollX": true
                    });
                    });
            });


        }
    }
</script>


<style scoped>
body{margin-top:20px;
background-color:#f2f6fc;
color:#69707a;
}
.img-account-profile {
    height: 10rem;
}

.card {
    box-shadow: 0 0.15rem 1.75rem 0 rgb(33 40 50 / 15%);
}
.card .card-header {
    font-weight: 500;
}
.card-header:first-child {
    border-radius: 0.35rem 0.35rem 0 0;
}
.card-header {
    padding: 1rem 1.35rem;
    margin-bottom: 0;
    background-color: rgba(33, 40, 50, 0.03);
    border-bottom: 1px solid rgba(33, 40, 50, 0.125);
}
.form-control, .dataTable-input {
    display: block;
    width: 100%;
    padding: 0.875rem 1.125rem;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1;
    color: #69707a;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #c5ccd6;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.35rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.nav-borders .nav-link.active {
    color: #0061f2;
    border-bottom-color: #0061f2;
}
.nav-borders .nav-link {
    color: #69707a;
    border-bottom-width: 0.125rem;
    border-bottom-style: solid;
    border-bottom-color: transparent;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0;
    padding-right: 0;
    margin-left: 1rem;
    margin-right: 1rem;
}

.profile_image{
    width: 300px;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    padding: 2px;
    border: dotted black 2px;
}

.agent_info{
    text-align: left;
}

.agent_images{
    width: 200px;
    height: 130px;
    object-fit: cover;
    border-radius: 10px;
}

table.dataTable thead th, table.dataTable thead td {
    font-size: 12px;
    font-weight: 500;
    color: rgb(43, 43, 43);
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 14;
}

.agent_ref{
    display: flex;
}
</style>