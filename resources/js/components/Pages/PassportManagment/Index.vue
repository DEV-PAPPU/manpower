<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">Modal title</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="database__table">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Video</th>
                                        <th>Medical</th>
                                    </tr>
                                </thead>
                                <tbody v-if="passenger">
                                    <tr v-if="passenger.interview">
                                        <td>
                                            <span v-if="passenger.interview.video_passenger == '1'">Yes</span>
                                            <span v-else>No</span>
                                        </td>
                                        <td>
                                            <span v-if="passenger.interview.medical_result == '1'">Fit</span>
                                            <span v-else>Gone {{passenger.interview.medical_gone_date}}</span>
                                        </td>
                                    </tr>

                                    <span v-else>Interview pending</span>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passengers Status</h6>
                <!-- <router-link :to="{name: 'PassportAdd'}" class="btn bg-light btn-sm">Add Passenger</router-link> -->
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div style="overflow-x:auto;" class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>S/L</th>
                                <th style="width:60px">Interview</th>
                                <th style="width:110px">Name</th>
                                <th style="width:110px">Passport</th>
                                <th style="width:60px">Trade</th>
                                <th style="width:120px">Company</th>
                                <th style="width:90px">Pc Date</th>
                                <th style="width:90px">STM Date</th>
                                <th style="width:90px">TC RCV Date</th>
                                <th style="width:90px">MP RCV Date</th>
                                <th style="width:90px">TKT Date</th>
                                <th style="width:100px">Fly</th>
                                <th style="width:90px">Sector</th>
                                <th style="width:80px">Agent</th>
                                <th style="width:70px">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>
                                    <button @click="viewMore(item)" data-toggle="modal"
                                        data-target="#exampleModalCenter">
                                        <i class="fas fa-user-plus edit_icon"></i> </button>
                                </td>
                                <td>{{item.passenger.passenger_name}}</td>
                                <td>{{item.passenger.passport_no}}</td>
                                <td>{{item.trade.trade}}</td>
                                <td>{{item.company.company_name}}</td>
                                <td>
                                    <span v-if="item.interview">{{item.interview.pc_date}}</span>
                                    <span v-else v-html="pending_icon"></span>
                                </td>

                                <td>
                                    <div v-if="item.stmpassport">
                                        <span v-if="!item.stmpassport.stm_passport_complete_date">Processing</span>
                                        <span v-else>{{item.stmpassport.stm_passport_complete_date}}</span>
                                    </div>

                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>
                                </td>

                                <td>
                                    <span v-if="item.interview">{{item.interview.tc_rcv_date}}</span>
                                    <span v-else v-html="pending_icon"></span>
                                </td>

                                <td>
                                    <div v-if="item.manpowerpassport">
                                        <span
                                            v-if="!item.manpowerpassport.man_power_passport_complete_date">Processing</span>
                                        <span v-else>{{item.manpowerpassport.man_power_passport_complete_date}}</span>
                                    </div>
                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>
                                </td>

                                <td>
                                    <div v-if="item.tktpassport">
                                        <span v-if="!item.tktpassport.tkt_passport_booking_date">Processing</span>
                                        <span v-else>{{item.tktpassport.tkt_passport_booking_date}}</span>
                                    </div>
                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>
                                </td>

                                <td>
                                    <div v-if="item.interview">
                                       
                                        <span v-if="item.interview.passenger_fly == '1'">Fly</span>

                                        <div v-if="item.interview.passenger_fly == '0' ">

                                            <di class="d-flex gap-2 align-items-center">
                                                <span>No</span>
                                                <button @click="FlyStatus(item)" class="btn btn-primary btn-sm">
                                                    <i class="fas fa-toggle-on"></i></button>
                                            </di>

                                        </div>
                                    </div>

                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>

                                </td>
                                <td>{{item.sector.sector_name}}</td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_name}}</span>
                                    <span v-else>{{item.passenger.passport_source}}</span>
                                </td>
                                <td>
                                    <router-link :to="{name: 'PassengerEdit', params: {id: item.id}}"><i
                                            class="far edit_icon fa-edit"></i></router-link>
                                    <button @click="deleteAgent(item)"><i
                                            class="fas delete_icon fa-trash-alt"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
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
import axios from 'axios';

export default {
    data : () =>{
        return {
            form:{
            },
            passengers:[],
            passenger:'',
            passenger_fly_data: '',
            pending_icon: `<i style="color:red; size:20px; margin-left: 26px;" class="far fa-window-minimize pending_icon"></i>`
        }
    },

    methods:{
        loadInterview(){
            //API Call
            axios.get("passenger-status").then((res)=>{
                this.passengers = res.data;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                        "scrollX": true
                    });
                    });
              })
        },

        viewMore(data){
            this.passenger = data;
        },


        FlyStatus(item){

          Swal.fire({
                title: 'Change Passenger Fly Status.',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                      Swal.fire('Saved!', '', 'success');

                        axios.post(`interview/change-fly-status/${item.id}`).then(res =>{
                
                        Toast.fire({
                                    icon: 'success',
                                    title: res.data.msg
                            });

                            axios.get("passenger-status").then((res)=>{
                            this.passengers = res.data;
                            })
                        })

                } else if (result.isDenied) {
                    Swal.fire('Changes are not saved', '', 'info')
                }
            })
        },

        deleteAgent(item){
            // axios.post(`delete-passenger/${item.id}`).then(res =>{
            //     Toast.fire({
            //             icon: 'success',
            //             title: res.data.msg
            //     });

            //     let index = this.passengers.indexOf(item);
            //     this.passengers.splice(index, 1);
            // })
        }
    },

    mounted() {
        this.loadInterview();
        }
}
</script>

<style scoped>
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

.edit_icon, .delete_icon{
    font-size: 18px;
    padding: 0px 3px;
}

.edit_icon{
    color: rgb(37, 102, 223);
}

.delete_icon{
    color: rgb(238, 12, 12);
}


/* .database__table{
    max-width: 1140px;
    overflow-x: scroll;
}

.dbtable{
    max-width: 1500px;
    overflow-x: scroll;
} */


/* @media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
} */

</style>