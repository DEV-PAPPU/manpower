<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Company List.</h6>
                     <button class="btn btn-info btn-sm">Add Company</button>
                    <!-- <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Dropdown Header:</div>
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </div> -->
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered" id="example">
                            <thead>
                                <tr>
                                    <th>Ser</th>
                                    <th>Company Name</th>
                                    <th>Address</th>
                                    <th>Contact Person</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Is Approved</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in companies" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.address}}</td>
                                    <td>{{user.contact_person}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.phone}}</td>
                                    <td>
                                        <i v-if="user.is_approved == 0" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td>
                                   
                                    <td>
                                        <i class="far fa-edit"></i>
                                        <i class="fas fa-trash-alt"></i>
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

//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

export default {
    data : () =>{
        return {
            companies:[]
        }
    },

    methods:{
        loadCompany(){
            //API Call
            axios
            .get("companies")
            .then((res)=>
            {
                this.companies = res.data;
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

    },

    mounted() {
        this.loadCompany();
        }

}
</script>

<style scoped>
table.dataTable thead th, table.dataTable thead td {
    font-size: 12px;
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 13;
}


@media only screen and (max-width: 800px){
	.database__table{
    overflow-x: scroll;
}
}
</style>