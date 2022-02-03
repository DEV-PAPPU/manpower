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
                                        <th>S/L</th>
                                        <th>Sector Name</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="sector in company_sectors" :key="sector.id">
                                        <td>{{sector.id}}</td>
                                        <td>{{sector.sector_name}}</td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="modal-footer d-flex justify-between">
                        <div>
                            
                            <form v-if="isChangeStatus" @submit.prevent="changeSTMStatus()">

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
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Requisition List</h6>
                    <router-link :to="{name: 'addRequisition'}" class="btn bg-light btn-sm">Add Requisition</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>Ser</th>
                                    <th>Kafil ID</th>
                                    <th>Company Name</th>
                                    <th>Sector</th>
                                    <th>Requisition Date</th>
                                    <!-- <th>Is Approved</th> -->
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in requisitions" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.kafil_id}}</td>
                                    <td>{{item.company.company_name}}</td>
                                    <td> <button @click="companySector(item.company)" data-toggle="modal" data-target="#exampleModalCenter"><i class="fas fa-band-aid edit_icon"></i></button></td>
                                    <td>{{item.requisition_date}}</td>
                                    <!-- <td>
                                        <i v-if="item.is_approved == 0" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td> -->
                                    <td>
                                        <router-link :to="{name: 'EditRequisition', params: {id: item.id}}"><i class="far edit_icon fa-edit"></i></router-link>
                                        <a href="#" @click="requisitionDelete(item.id)" ><i class="fas delete_icon fa-trash-alt"></i></a>

                                        <router-link :to="{name: 'RequisitionVisa', params: {id: item.id}}" class="edit_icon"> <i class="fa fa-list act-btn-txt"></i></router-link>
                                       
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
    data : () =>{
        return {
            requisitions:'',
            company_sectors: '',
        }
    },

    methods:{
        loadagents(){
            //API Call
            axios.get("requisitions").then(res=>{
                this.requisitions = res.data;
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

        requisitionDelete(id){
            axios.post(`delete-requisition/${id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                let index = this.passengers.indexOf(item);
                this.passengers.splice(index, 1);
            })
        },

        companySector(company){
            axios.get(`requisition-company-sectors/${company.id}`).then(res =>{
                this.company_sectors = res.data;
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

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>