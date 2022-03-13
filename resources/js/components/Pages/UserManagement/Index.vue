<template>
    <div>

         <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">User Info</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        
                        <div class="my-3 d-flex justify-content-between">
                               <img :src="profile.avatar" width="200px" class="profile__img" alt="" srcset="">
                        </div>

                        <table>

                        </table>

                        <table class="table table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Mobile</th>
                                    <th>Type</th>
                                    <!-- <th>Status</th> -->
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>{{profile.name}}</td>
                                    <td>{{profile.email}}</td>
                                    <td >{{profile.phone}}</td>
                                    <td>{{profile.role}}</td>
                                    <!-- <td>{{profile.status}}</td> -->
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

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

                                    <router-link :to="{name: 'UserEdit', params: {id: user.id}}"><i
                                            class="far edit_icon fa-edit"></i></router-link>

                                    <button @click="deleteUser(user.id)"><i class="fas delete_icon fa-trash-alt"></i></button>

                                     <i @click="userProfile(user)" class="far fa-user cursor edit_icon" data-toggle="modal" data-target="#exampleModalCenter" ></i> 

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
            users:[],
            profile: '',
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
                        pageLength: 10,
                    });
                    });
              })
        },

        deleteUser(id){
 
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

                axios.post(`user-delete/${id}`).then(res =>{
                  
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
            });
            
        },

        userProfile(user){
            this.profile = user
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

.profile__img{
    border-radius: 4px;
   box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
</style>