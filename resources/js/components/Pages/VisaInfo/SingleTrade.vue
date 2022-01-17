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
                                    <th>Visa No</th>
                                    <th>Trade</th>
                                    <th>Qty</th>
                                    <th>Available Qty</th>
                                    <th>Salary</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="trade in trades" :key="trade.id"
                                    :class="trade.available == '0'? 'disabled': ''">
                                    <td>{{trade.trade_visa_no}}</td>
                                    <td>{{trade.trade}}</td>
                                    <td>{{trade.trade_qty}}</td>
                                    <td>{{trade.available}}</td>
                                    <td>{{trade.salary}}</td>
                                    <td>{{trade.price_reference}}</td>
                                </tr>

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

        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Visa Trade</h6>
                    <router-link :to="{name: 'RequisitionList'}" class="btn bg-light btn-sm">Back To List</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered" id="example">
                            <thead>
                                <tr>
                                    <th>Ser</th>
                                    <th>Visa No</th>
                                    <th>Total Qty</th>
                                    <th>Booked</th>
                                    <th>Remaining</th>
                                    <th>See All Trades</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="visa in alldata" :key="visa.visa_no">
                                    <td>{{visa.id}}</td>
                                    <td>{{visa.visa_no}}</td>
                                    <td>{{visa.qty}}</td>
                                    <td>{{visa.booked}}</td>
                                    <td>{{visa.qty - visa.booked}}</td>
                                    <td> <button @click="viewTrade(visa.id)" class="btn btn-success"
                                            data-toggle="modal" data-target="#exampleModalCenter">All Trades</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';
    export default {
        data: () =>{
            return {
               alldata:[],
               trades: '',
            }
        },

        methods:{

            viewTrade(id){
                axios.get(`requisition/visa-trade/${id}`).then(res=>{
                this.trades = res.data
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                    });
              })
            },

        },

        mounted() {

            let id = this.$route.params.id;
            axios.get(`requisition/visa-info/${id}`).then(res=>{
                this.alldata = res.data
                setTimeout(() => {
                    $("#example").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                    });
              })

           
        }
    }
</script>


<style scoped>
table.dataTable thead th, table.dataTable thead td {
    font-size: 14px;
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

.disabled{
    pointer-events: none;
    opacity: 0.8;
    background: red;
    color: white ! important;
}

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>