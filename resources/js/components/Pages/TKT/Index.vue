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
                                        <th>Passport No.</th>
                                        <th>Passenger Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="item in passports" :key="item.id">
                                        <td>{{item.passenger.passport_no}}</td>
                                        <td>{{item.passenger.passenger_name}}</td>
                                        <td v-if="item.tkt_passport_status == '0'"  >
                                            <span>Processing</span> 
                                             <button @click="changeStatus(item.id)" class="ml-1 btn btn-success btn-sm">Complate </button>
                                        </td>
                                        <td v-else >Booked D: {{item.tkt_passport_booking_date}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-between">
                        <div>
                            
                            <form v-if="isChangeStatus" @submit.prevent="changetktstatus()">

                                <div class="form-group">
                                <label for="PassengerName">Complete Date</label>
                                <input v-model="form.passport_complate_date" required class="form-control" type="date">
                                </div>
                                <button type="submit" class="btn btn-success btn-sm">Complate </button>
                            </form>

                        </div>
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">TKT List</h6>
                 <button @click="reLoad" class="btn mx-2 bg-light btn-sm">Reload</button>
                <router-link :to="{name: 'TKTAdd'}" class="btn bg-light btn-sm">Add TKT</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>S/L</th>
                                <th>TKT Date</th>
                                <th>Total Passport</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in tkts" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.tkt_date}}</td>
                                <td id="totalPassport" >{{item.tktpassport.length}}</td>
                                <td>
                                    <span v-if="item.tkt_status == '0'" >Processing</span>
                                    <span v-else >Booked</span>
                                </td>
                                <td>
                                    <router-link :to="{name: 'PassengerEdit', params: {id: item.id}}"><i
                                            class="far edit_icon fa-edit"></i></router-link>
                                    <button @click="deleteAgent(item)"><i class="fas delete_icon fa-trash-alt"></i></button>
                                    <button @click="shopPassport(item.id)" data-toggle="modal" data-target="#exampleModalCenter"><i class="edit_icon fas fa-align-justify"></i></button>
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
                passport_complate_date: '',
                passport_id: '',
            },
            tkts:'',
            passports:[],
            tkt_id:'',
            isChangeStatus: false

        }
    },

    methods:{
        loadTKT(){
            //API Call
            axios.get("tkt/lists").then((res)=>{
                this.tkts = res.data;
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

        shopPassport(id){
            this.tkt_id = id;
            axios.get(`tkt/passports/${id}`).then(res =>{
                this.passports = res.data;
            })
        },

        deleteAgent(item){
            axios.post(`tkt/delete-passenger/${item.id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                let index = this.tkts.indexOf(item);
                this.tkts.splice(index, 1);
            })
        },

        changeStatus(id){
             this.form.passport_id = id;
             this.isChangeStatus = true;
        },

        changetktstatus(){

             let total_passport = $('#totalPassport').text();

            let data = {
                tkt_passport_id : this.form.passport_id,
                tkt_id : this.tkt_id,
                date : this.form.passport_complate_date,
                total_passport: total_passport
            } 

            axios.post('tkt/change-passport-status', data).then(res =>{
                this.isChangeStatus = false;
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                this.shopPassport(this.tkt_id);
                this.recallchangeStatus(data)
            })

        },

        recallchangeStatus(data){
            axios.post('tkt/change-passport-status', data);
            axios.get("tkt/lists").then((res)=>{
                this.tkts = res.data;
            }); 
        },

        reLoad(){
            axios.get("tkt/lists").then((res)=>{
                this.tkts = res.data;
            }); 
        }
    },

    mounted() {
        this.loadTKT();
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