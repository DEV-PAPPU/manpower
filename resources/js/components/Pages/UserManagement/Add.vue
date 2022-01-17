<template>
    <div>
        <div class="">
             <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-white">USER ADD</h6>
                        <router-link :to="{name: 'UserManagement'}" class="btn bg-light btn-sm">Back To List</router-link>

                    </div>
                    <!-- Card Body -->
                    <div class="card-body">

                        <form @submit.prevent="addUser" >
                              <div class="form-group row">

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="Username">Usrer Name</label>
                                            <input class="form-control" v-model="form.name" placeholder="Please enter name" type="text" >
                                            <small v-if="errors.name" class="form-text text-danger">{{ errors.name[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                         <div class="form-group">
                                            <label for="email">Email</label>
                                            <input class="form-control" v-model="form.email" placeholder="Please enter email " type="email" >
                                            <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="PerAddress">Phone No</label>
                                            <input class="form-control" v-model="form.phone" placeholder="Please enter phone" type="text" >
                                            <small v-if="errors.phone" class="form-text text-danger">{{ errors.phone[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="PerAddress">Full Address</label>
                                            <input class="form-control" v-model="form.address" placeholder="Please enter address" type="text" >
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">Password </label>
                                            <input class="form-control" v-model="form.password" type="password" >
                                             <small v-if="errors.password" class="form-text text-danger">{{ errors.password[0] }}</small>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">Password Confirmation</label>
                                            <input class="form-control" v-model="form.password_confirmation" type="password" >
                                             <small v-if="errors.password_confirmation" class="form-text text-danger">{{ errors.password_confirmation[0] }}</small>
                                        </div>
                                    </div>


                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">User Role</label>
                                        <select v-model="form.role" class="form-control filter-select" id="UserRole">
                                            <option value="">-- Select Role --</option>
                                            <option value="user">User</option>
                                            <option value="superadmin">Super Admin</option>
                                            <option value="admin">Adminn</option>
                                        </select>
                                        <small v-if="errors.role" class="form-text text-danger">{{ errors.role[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserStatus">User Status</label>
                                        <select v-model="form.status" class="form-control filter-select" id="UserStatus">
                                            <option value="">-- Select Status --</option>
                                            <option value="active">Active</option>
                                            <option value="inactive">In Active</option>
                                        </select>
                                        <small v-if="errors.status" class="form-text text-danger">{{ errors.status[0] }}</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-4" style="clear:both;">
                                        <button class="btn btn-success" type="submit">Save Changes</button>
                                        <button class="btn btn-danger" type="reset">Cancel</button>
                                    </div>
                                </div>
                        </form>
                        
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data: () =>{
            return {
                form:{
                name: '',
                role: '',
                status: '',
                phone: '',
                address: '',
                email: '',
                password: '',
                password_confirmation: '',
               },
               errors: '',
            }
        },

        methods:{

            addUser(){
             
              axios.post('add-user', this.form).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            }

        },

        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
