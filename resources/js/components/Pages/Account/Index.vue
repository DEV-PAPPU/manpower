<template>
    <div>
          <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="bg-primary modal-header">
                        <h6 class="modal-title text-white" id="exampleModalCenterTitle">Payment History</h6>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div v-if="paymentHistory.length" class="database__table">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>Amount</th>
                                        <th style="width:200px;">Pay Type / Info</th>
                                        <th>Pay Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in paymentHistory" :key="item.id">
                                        <td>{{item.pay_amount}}</td>
                                        <td>
                                            <span v-if="item.payment_type == '0'">Cash</span>
                                            
                                            <div  v-if="item.bank">
                                              <span>Bank N: {{item.bank.bank_name}} </span>

                                              <div class="my-1">B : {{item.branch.branch_name}}</div>


                                              <div class="mb-1">Bank C : NO : {{item.bank_check_number}}</div>

                                              <div> C. Date : {{item.bank_check_date}}</div>
                                            </div>

                                        </td>
                                        <td>{{item.pay_date}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                     <span v-else class="my-5">Payment Pending</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <PaymentFrom/>
        </div>
        <div class="my-5">
            <!-- <PaymentFilter v-on:filterdata="filterdata($event)"/> -->
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger List</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th style="width:50px">S/L</th>
                                <th style="width:100px">Passenger Name</th>
                                <th style="width:100px">Passenger Phone</th>
                                <th style="width:100px">Passport No.</th>
                                <th style="width:120px">Company</th>
                                <th style="width:60px">Visa NO.</th>
                                <th style="width:60px">Trade</th>
                                <th style="width:100px">Agent Name</th>
                                <th style="width:100px">Agent Phone</th>
                                
                                <th style="width:80px">Visa Price</th>
                                <th style="width:80px">Discount</th>
                                <!-- <th style="width:120px">Visa Discount Price</th> -->
                                <th style="width:80px">Total Pay</th>
                                <th style="width:70px">Total Due</th>
                                <th style="width:75px">P: history</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passenger_phone}}</td>
                                <td>{{item.passport_no}}</td>
                                <td>{{item.company.company_name}}</td>
                                 <td>{{item.trade.trade_visa_no}}</td>
                                <td>{{item.trade.trade}}</td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_name}}</span>
                                    <span v-else>{{item.passport_source}}</span>
                                </td>
                                <td>
                                    <span v-if="item.agent">{{item.agent.agent_phone}}</span>
                                    <span v-else>N/A</span>
                                </td>
                               
                                <td>{{item.trade.price_reference}}</td>
                                <td>{{item.passenger_discount > 0 ? item.passenger_discount : 'N/A'}}</td>

                                <!-- <td>
                                    <span v-if="item.passenger_discount > 0"> Discount P: {{item.trade.price_reference - item.passenger_discount}}
                                    </span>

                                    <span v-else > Visa P: {{item.trade.price_reference}} </span>
                                </td> -->

                                <td>{{item.passenger_total_pay ? item.passenger_total_pay : 'N/A'}}</td>

                                <td>

                                  {{item.trade.price_reference - item.passenger_discount - item.passenger_total_pay == 0 ? 'Paid': 
                                  item.trade.price_reference - item.passenger_discount - item.passenger_total_pay }}

                                </td>
                                <td>
                                    <button @click="payHistory(item.id)"
                                             data-toggle="modal"
                                            data-target="#exampleModalCenter">
                                            <i class="fa fa-list action_icon"></i>
                                    </button>
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
import PaymentFilter from './filter.vue'

import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

export default {
    components:{PaymentFrom,PaymentFilter},
    data : () =>{
        return {
            form:{
            },
            passengers:[],
            passenger:'',
            paymentHistory: '',
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

        payHistory(id){
            axios.get(`payment/history/for/passenger/${id}`).then(res =>{
                this.paymentHistory = res.data
            })
        },

        filterdata(event){
           this.passengers = event;
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