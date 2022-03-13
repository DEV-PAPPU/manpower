<template>
    <div>
         <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">{{processing_info.label}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Date: {{processing_info.date}}
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passengers Status</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div style="overflow-x:auto;" class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>S/L</th>
                                <th style="width:110px">Name</th>
                                <th style="width:110px">Passport</th>
                                <th style="width:120px">Company</th>
                                <th style="width:60px">Visa No</th>
                                <th style="width:60px">Trade</th>
                                <th style="width:90px">Video</th>
                                <th style="width:120px">Medical</th>
                                <th style="width:90px">Pc Date</th>
                                <th style="width:100px">STM Date</th>
                                <th style="width:90px">TC RCV Date</th>
                                <th style="width:100px">MP RCV Date</th>
                                <th style="width:120px">TKT Date</th>
                                <th style="width:100px">Fly</th>
                                <th style="width:90px">Sector</th>
                                <th style="width:80px">Agent</th>
                                <th style="width:60px">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id"
                                :class="{flyrow: item.passenger_fly == '1'}">
                                <td>{{item.id}}</td>
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passport_no}}</td>
                                <td>{{item.company.company_name}}</td>
                                <td>{{item.trade.trade_visa_no}}</td>
                                <td>{{item.trade.trade}}</td>

                                 <td>
                                    <div v-if="item.interview">
                                        <p v-if="item.interview.video_passenger == '1'">Yes</p>
                                        <p v-else>No</p>
                                    </div>
                                    <span v-else v-html="pending_icon"></span>
                                </td>

                                 <td>
                                    <div v-if="item.interview">
                                        <p v-if="item.interview.medical_result == '1'">Fit</p>
                                        <p v-else>Gone {{item.interview.medical_gone_date}}</p>
                                    </div>
                                    <span v-else v-html="pending_icon"></span>
                                </td>

                                <td>
                                    <span v-if="item.interview">{{item.interview.pc_date}}</span>
                                    <span v-else v-html="pending_icon"></span>
                                </td>

                                <td>                                    
                                    <div v-if="item.stmpassport">
                                        <span v-if="item.stmpassport.stm_passport_complete_date">{{item.stmpassport.stm_passport_complete_date}}</span>

                                        <span v-else>Processing  <i @click="stmProcessDate(item.stmpassport.stm_id)" class="fas fa-calendar-alt cursor edit_icon" data-toggle="modal" data-target="#exampleModalCenter" ></i> </span>
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
                                        <span v-if="!item.manpowerpassport.man_power_passport_complete_date">
                                             Processing 
                                             <i @click="mpProcessDate(item.manpowerpassport.man_power_id)" class="fas fa-calendar-alt cursor edit_icon" data-toggle="modal" data-target="#exampleModalCenter" ></i> 

                                        </span> 

                                        <span v-else>{{item.manpowerpassport.man_power_passport_complete_date}}</span>
                                    </div>
                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>
                                </td>

                                <td>
                                    <div v-if="item.tktpassport">
                                        <span v-if="!item.tktpassport.tkt_passport_booking_date">Processing
                                             <i @click="tktProcessDate(item.tktpassport.tkt_id)" class="fas fa-calendar-alt cursor edit_icon" data-toggle="modal" data-target="#exampleModalCenter" ></i> 
                                        </span>
                                        <span v-else>{{item.tktpassport.tkt_passport_booking_date}}</span>
                                    </div>
                                    <div v-else>
                                        <span v-html="pending_icon"></span>
                                    </div>
                                </td>

                                <td>
                                    <span v-if="item.passenger_fly == '1'">Pasenger Flyed</span>

                                    <div v-else class="d-flex gap-2 align-items-center">

                                      <span>No</span>

                                        <button @click="FlyStatus(item.id)" class="btn btn-primary btn-sm">
                                           <i class="fas fa-toggle-on"></i>
                                        </button>

                                    </div>

                                </td>
                                <td>{{item.sector.sector_name}}</td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_name}}</span>
                                    <span v-else>{{item.passport_source}}</span>
                                </td>
                                <td>

                                    <span v-if="item.interview">
                                        <router-link :to="{name: 'EditInterview', params: {id: item.interview.id}}"><i
                                                class="far edit_icon fa-edit"></i></router-link>
                                    </span>

                                    <span v-else><span v-html="pending_icon"></span></span>
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
            passengers:[],
            passenger_fly_data: '',
            pending_icon: `<i style="color:red; size:20px; margin-left: 26px;" class="far fa-window-minimize pending_icon"></i>`,
            processing_info: {
                label: '',
                date: '',
            },
        }
    },

    methods:{
        loadInterview(){
            // API Call
            axios.get("passenger-status").then((res)=>{
                this.passengers = res.data;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 25,
                        "scrollX": true
                    });
                    });
              })
        },

        mpProcessDate(id){
            
            axios.get(`mp/processing-date/${id}`).then((res)=>{
                this.processing_info.label = res.data.label;
                this.processing_info.date = res.data.date;
            })
        },

        stmProcessDate(id){
            
            axios.get(`stm/processing-date/${id}`).then((res)=>{
                this.processing_info.label = res.data.label;
                this.processing_info.date = res.data.date;
                console.log('l',res.data.label)
                console.log('d',res.data.date)
            })
        },

        tktProcessDate(id){
            
            axios.get(`tkt/processing-date/${id}`).then((res)=>{
                this.processing_info.label = res.data.label;
                this.processing_info.date = res.data.date;
                console.log('l',res.data.label)
                console.log('d',res.data.date)
            })
        },

        FlyStatus(id){
           
          Swal.fire({
                title: 'Change Passenger Fly Status.',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Yes',
                denyButtonText: `No`,
                }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {

                        axios.post(`passenger/fly/status/${id}`).then(res =>{
                
                              if(res.data.msg){
                      
                                    Toast.fire({
                                        icon: 'success',
                                        title: res.data.msg
                                    });

                                    window.location.reload();
                              }

                            if(res.data.error_msg){
                                Toast.fire({
                                        icon: 'error',
                                        title: res.data.error_msg
                                });
                            }
                        })

                }
            })
        },
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

.edit_icon{
    font-size: 18px;
    padding: 0px 3px;
    cursor: pointer;
}

.edit_icon{
    color: rgb(37, 102, 223);
}


tr.flyrow{
    background: #70b685;
    color: white;
}

</style>