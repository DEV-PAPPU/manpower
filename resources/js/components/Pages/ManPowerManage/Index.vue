<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">All Passports</h5>
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
                                        <td v-if="item.man_power_passport_status == '0'"  >
                                            <span>Processing</span> 
                                             <button @click="changeStatus(item.id)" class="ml-1 btn btn-success btn-sm">Complate </button>
                                        </td>
                                        <td v-else >{{item.man_power_passport_complete_date}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <div>
                            
                            <form v-if="isChangeStatus" @submit.prevent="changempStatus()">

                                <div class="form-group">
                                <label for="PassengerName">Complete Date</label>
                                <input v-model="form.passport_complate_date" required class="form-control" type="date">
                                </div>
                                <div class="d-flex gap-4">
                                  <button type="submit" class="btn btn-success btn-sm">Complate </button>
                                  <button @click="clrDate" class="btn btn-info btn-sm">Reset</button>
                                </div>
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
                <h6 class="m-0 font-weight-bold text-white">Menpower List</h6>
                <router-link :to="{name: 'MPAdd'}" class="btn bg-light btn-sm">Add MP REV</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>S/L</th>
                                <th>MP Date</th>
                                <th>Total Passport</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in manpowerdata" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.man_power_date}}</td>
                                <td id="totalPassport" >{{item.mppassport.length}}</td>
                                <td>
                                    <span v-if="item.man_power_status == '0'" >Processing</span>
                                    <span v-else >Complate</span>
                                </td>
                                <td>
                                    <router-link :to="{name: 'EditMP', params: {id: item.id}}"><i
                                            class="far edit_icon fa-edit"></i></router-link>
                                    <button @click="deleteManPower(item.id)" ><i class="fas delete_icon fa-trash-alt"></i></button>
                                    <button @click="showPassport(item.id)" data-toggle="modal" data-target="#exampleModalCenter"><i class="edit_icon fas fa-align-justify"></i></button>

                                     <router-link :to="{name: 'ManPowerPrint', params: {id: item.id}}"><i class="fas fa-edit fa-print"></i></router-link>
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
            manpowerdata:'',
            passports:[],
            manpower_id:'',
            isChangeStatus: false,

        }
    },

    methods:{
        loadSTM(){
            
            //API Call
            axios.get('manpower-lists').then(res=>{
                this.manpowerdata = res.data;
                console.log(res)
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

        showPassport(id){
            this.manpower_id = id;
            axios.get(`manpower-passports/${id}`).then(res =>{
                this.passports = res.data;
            })
        },

         changeStatus(id){
             this.form.passport_id = id;
             this.isChangeStatus = true;
        },

        changempStatus(){

          let total_passport = $('#totalPassport').text();

            let data = {
                manpower_passport_id : this.form.passport_id,
                manpower_id : this.manpower_id,
                total_passport: total_passport,
                date : this.form.passport_complate_date,
            } 

            axios.post('manpower-change-passport-status', data).then(res =>{
               
               this.isChangeStatus = false;

                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });
                this.form.passport_complate_date = '';
                this.showPassport(this.manpower_id);
                this.recallchangeStatus(data);
            })

        },
 

        recallchangeStatus(data){
            axios.post('manpower-change-passport-status', data);
            axios.get("manpower-lists").then((res)=>{
                this.manpowerdata = res.data;
                 window.location.reload();
            }); 
        },

        clrDate(){
            this.isChangeStatus = false;
            this.form.passport_complate_date = '';
        },

        deleteManPower(id){
              
            Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {

                axios.post(`manpower/delete/${id}`).then(res =>{
                   
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

              });
              }
            })
        },
    },

    mounted() {
        this.loadSTM();
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