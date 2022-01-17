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
                                    <tr>
                                        <td>data</td>
                                        <td>data</td>
                                        <td>data</td>
                                        <td>data</td>
                                        <td>data</td>
                                        <td>data</td>
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
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger List</h6>
                <router-link :to="{name: 'AddPassenger'}" class="btn bg-light btn-sm">Add Passenger</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>Passenger Name</th>
                                <th>DOB</th>
                                <th>Passport Info</th>
                                <th>Mobile</th>
                                <th>Father Name</th>
                                <th>Gurdian's No</th>
                                <th>District</th>
                                <th>Passport Source</th>
                                <th>Agent Name</th>
                                <th>Is Approved</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passenger_date_of_birth}}</td>
                                <td>
                                    <div>
                                        <span>No: {{item.passport_no}}</span>
                                    </div>
                                    <div>
                                        <span>Exp D: {{item.passport_expire_date}}</span>
                                    </div>
                                </td>
                                <td>{{item.passenger_phone}}</td>
                                <td>{{item.passenger_father_name}}</td>
                                <td>{{item.passenger_gurdian_no}}</td>
                                <td>{{item.district_name}}</td>
                                <td>{{item.passport_source}}</td>
                                <td>{{item.agent_name}}</td>
                                <td>
                                    <i v-if="item.is_approved == 0" class="fa fa-check Yes"></i>
                                    <i v-else class="fas fa-times"></i>
                                </td>
                                <td>
                                    <router-link :to="{name: 'PassengerEdit', params: {id: item.id}}"><i
                                            class="far edit_icon fa-edit"></i></router-link>
                                    <button @click="deleteAgent(item)"><i class="fas delete_icon fa-trash-alt"></i></button>

                                    <router-link :to="{name: 'PassengerFile', params: {id: item.id}}"><i class="edit_icon fas fa-align-justify"></i></router-link>
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
            passenger:''
        }
    },

    methods:{
        loadagents(){
            //API Call
            axios.get("passengers").then((res)=>{
                this.passengers = res.data;
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

        viewPassenger(data){
            this.passenger = data;
        },

        deleteAgent(item){
            axios.post(`delete-passenger/${item.id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                let index = this.passengers.indexOf(item);
                this.passengers.splice(index, 1);
            })
        }
    },

    mounted() {
        this.loadagents();
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

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>