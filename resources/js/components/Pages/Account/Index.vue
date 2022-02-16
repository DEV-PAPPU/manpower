<template>
    <div>
        <div>
            <PaymentFrom/>
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger List</h6>
                <!-- <router-link :to="{name: 'AddPassenger'}" class="btn bg-light btn-sm">Add Passenger</router-link> -->
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th style="width:60px">S/L</th>
                                <th style="width:100px">Passenger Name</th>
                                <th style="width:100px">Passenger Phone</th>
                                <th style="width:100px">Passport No.</th>
                                <th style="width:100px">Agent Name</th>
                                <th style="width:100px">Agent Phone</th>
                                <th style="width:100px">Trade</th>
                                <th style="width:100px">Visa Price</th>
                                <th style="width:100px">Total Pay</th>
                                <th style="width:100px">Total Due</th>
                                <th style="width:80px">P: history</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passenger_phone}}</td>
                                <td>{{item.passport_no}}</td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_name}}</span>
                                    <span v-else>{{item.passport_source}}</span>
                                </td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_phone}}</span>
                                    <span v-else>N/A</span>
                                </td>
                                <td>{{item.trade.trade}}</td>
                                <td>{{item.trade.price_reference}}</td>
                                <td>{{item.passenger_total_pay ? item.passenger_total_pay : 'N/A'}}</td>
                                <td>{{item.trade.price_reference - item.passenger_total_pay }}</td>
                                <td>
                                    <button @click="paymentHistory(item.id)"><i class="fa fa-list action_icon"></i></button>
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
import PaymentFrom from './PaymentFrom.vue'
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

export default {
    components:{PaymentFrom},
    data : () =>{
        return {
            form:{
            },
            passengers:[],
            passenger:''
        }
    },

    methods:{
        loadPassenger(){
            //API Call
            axios.get("payment/lists").then((res)=>{
                this.passengers = res.data;
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
              })
        },

        paymentHistory(id){
            alert(id)
        }

    },

    mounted() {
        this.loadPassenger();
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

.action_icon{
    font-size: 18px;
    padding: 0px 3px;
    color: rgb(37, 102, 223);
}


@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>