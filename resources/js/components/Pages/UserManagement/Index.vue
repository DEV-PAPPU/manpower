<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">User List</h6>
                    <router-link :to="{name: 'AddUser'}" class="btn bg-light btn-sm">Add User</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="user__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="user in users" :key="user.id">
                                    <td>{{user.id}}</td>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.phone}}</td>
                                    <td>{{user.role}}</td>
                                    <td>{{user.status}}</td>
                                    <td>
                                        <router-link :to="{name: 'UserEdit', params: {id: user.id}}" class="mr-2 btn btn-primary btn-user"><i class="far edit_icon fa-edit pr-2"></i></router-link>
                                        <button class="btn btn-danger btn-user">Delete</button>
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
            users:[]
        }
    },

    methods:{
        loadUsers(){
            //API Call
            axios
            .get("users")
            .then((res)=>
            {
                this.users = res.data;
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
        }

    },

    mounted() {
        this.loadUsers();
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


@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>