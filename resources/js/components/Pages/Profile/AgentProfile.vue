<template>
    <div class="mt-4">
        <div class="row">
            <div class="col-xl-4">
                <!-- Profile picture card-->
                <div class="card mb-4 mb-xl-0">
                    <div class="text-white card-header">Profile Picture</div>
                    <div class="card-body text-center">
                        <!-- Profile picture image-->
                        <img class="profile_image" :src="agent.agent_image" alt="">

                        <div class="card-body p-1-9 p-xl-5">
                            <div class="mb-2">
                                <h3 class="agent_info h4 mb-0"> {{agent.agent_name}}</h3>
                            </div>

                            <div class="mt-3">
                                <p class="agent_info mt-2"><i class="far fa-envelope display-25 me-3 text-secondary"> </i>
                                    {{agent.agent_email}}</p>
                                <p class="agent_info my-2"><i
                                        class="fas fa-mobile-alt display-25 me-3 text-secondary"></i>{{agent.agent_phone}}
                                </p>
                                <p class="agent_info my-2"><a href="#!"><i
                                            class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Office :
                                        {{agent.agent_address_office}}</a></p>
                                <p class="agent_info"><a href="#!"><i
                                            class="fas fa-map-marker-alt display-25 me-3 text-secondary"></i>Address
                                        Area : {{agent.agent_address_area}}</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-xl-8">

                 <!-- Agent passenger card-->
                <div class="card mb-4">
                    <div class="text-white card-header d-flex flex-row align-items-center justify-content-between">
                        <span>Agent Docoment</span>
                        <button @click="toggleImage" class="btn btn-light btn-sm">Show</button>
                    </div>
                    <div v-if="showAgentImage == true" class="card-body">
                        <div class="mt-4 images">
                            <div v-if="images.length" class="d-flex gap-3 flex-wrap">
                                <div v-for="img in images" :key="img.id" class="mb-3">
                                    <img :src="img.image" class="agent_images" alt="" srcset="">
                                </div>
                            </div>
                            <p v-else class="p-6">No Images</p>
                        </div>
                    </div>
                </div>


                <!-- Agent info card-->
                <div class="card mb-4">
                    <div class="text-white card-header d-flex flex-row align-items-center justify-content-between">
                        <span>Referance Details</span>
                        <button @click="toggleAgentinfo('agentinfo')" class="btn btn-light btn-sm">Show</button>
                    </div>
                    <div v-if="showAgentInfo" class="card-body">

                        <div class="database__table">
                                <table class="table table-hover table-bordered dbtable">
                                    <thead>
                                        <tr>
                                            <th style="width:40px">Agent S/L</th>
                                            <th style="width:100px">Agent Name</th>
                                            <th style="width:100px">Agent Phone</th>
                                            <th style="width:100px">Agent Imo</th>
                                            <th style="width:100px">Agent Wp</th>
                                            <!-- <th style="width:100px">District</th> -->
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>{{agent.agent_ref_1_name}}</td>
                                            <td>{{agent.agent_ref_1_phone}}</td>
                                            <td>{{agent.agent_ref_1_imo_number}}</td>
                                            <td>{{agent.agent_ref_1_wp_number}}</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td>{{agent.agent_ref_2_name}}</td>
                                            <td>{{agent.agent_ref_2_phone}}</td>
                                            <td>{{agent.agent_ref_2_imo_number}}</td>
                                            <td>{{agent.agent_ref_2_wp_number}}</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td>{{agent.agent_ref_3_name}}</td>
                                            <td>{{agent.agent_ref_3_phone}}</td>
                                            <td>{{agent.agent_ref_3_imo_number}}</td>
                                            <td>{{agent.agent_ref_3_wp_number}}</td>
                                        </tr>

                                    </tbody>
                                </table>
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
               
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
    export default {
        data: () =>{
            return {
               agent: '',
               images: '',
               showAgentInfo: true,
               passenger:'',
               showPassenger: false,
               showAgentImage: false,
            }
        },

        methods:{

            toggleAgentinfo(){
                 
                  this.showAgentImage = false;
                  this.showPassenger = false;
                  this.showAgentInfo = !this.showAgentInfo
            },

            togglePassenger(){
                 
                    this.showAgentInfo = false;
                    this.showAgentImage = false;
                    this.showPassenger = !this.showPassenger;

            },
            toggleImage(){
                 
                    this.showAgentInfo = false;
                    this.showPassenger = false;
                    this.showAgentImage = !this.showAgentImage;

            },
        },

        mounted() {

            let id = this.$route.params.id;
           
            axios.get(`agent-profile/${id}`).then(res =>{
                this.agent = res.data.agent;
                this.images = res.data.images;
            });

            axios.get(`agent-passenger/${id}`).then(res =>{
                this.passenger = res.data;

                setTimeout(() => {
                   
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 10,
                        "scrollX": true
                        
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