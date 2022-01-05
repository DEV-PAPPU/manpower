<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Company List</h6>
                     <router-link :to="{name: 'AddCompany'}" class="btn bg-light btn-sm">Add Company</router-link>
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
                                <tr v-for="company in companies" :key="company.id">
                                    <td>{{company.id}}</td>
                                    <td>{{company.name}}</td>
                                    <td>{{company.address}}</td>
                                    <td>{{company.contact_person}}</td>
                                    <td>{{company.email}}</td>
                                    <td>{{company.phone}}</td>
                                    <td>
                                        <i v-if="company.is_approved == 0" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td>
                                   
                                    <td>
                                        <router-link :to="{name: 'company-edit', params: {id: company.id}}"><i class="far edit_icon fa-edit"></i></router-link>
                                        <a href="#" @click="deleteCompany(company.id)" ><i class="fas delete_icon fa-trash-alt"></i></a>
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
                        // "bDestroy": true,                        
                    });
                    });
              })
        },

        deleteCompany(id){
            axios.post(`delete-company/${id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                this.loadCompany();
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