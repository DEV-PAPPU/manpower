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
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th style="width:60px">S/L</th>
                                    <th style="width:130px">Company Name</th>
                                    <th>Address</th>
                                    <th style="width:130px">Contact Person</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Country</th>
                                    <th style="width:70px">Status</th>
                                    <th style="width:100px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in companies" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.company_name}}</td>
                                    <td>{{item.company_address}}</td>
                                    <td>{{item.contact_person}}</td>
                                    <td>{{item.company_email}}</td>
                                    <td>{{item.company_phone}}</td>
                                    <td style="width:90px">{{item.country_name}}</td>
                                    <td>
                                        <i v-if="item.company_status == '0'" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td>

                                    <td>
                                        <router-link :to="{name: 'company-edit', params: {id: item.id}}"><i
                                                class="far edit_icon fa-edit"></i></router-link>

                                        

                                        <a href="#" @click="deleteCompany(item)"><i
                                                class="fas delete_icon fa-trash-alt"></i></a>

                                        <router-link :to="{name: 'CompanyRequisitions', params: {id: item.id}}"><i
                                                class="fa fa-list action_icon"></i></router-link>
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
            companies:[],
            requisitions:''
        }
    },

    methods:{
        loadCompany(){
            //API Call
            axios
            .get("companies")
            .then((res)=>
            {
                this.companies = res.data.companies;
                this.requisitions = res.data.companies;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 10,
                        "scrollX": true
                        // "bDestroy": true,                        
                    });
                    });
              })
        },

        deleteCompany(company){

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
             
                axios.post(`delete-company/${company.id}`).then(res =>{
               
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

.edit_icon,  .delete_icon{
    font-size: 18px;
    padding: 0px 3px;
}

.action_icon{
    font-size: 18px;
    padding: 0px 3px;
    color: rgb(37, 102, 223);
    cursor: pointer;
}

.edit_icon{
    color: rgb(37, 102, 223);
}

.delete_icon{
    color: rgb(238, 12, 12);
}

.company_logo{
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 80px;
    border: dotted black 2px
}

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>