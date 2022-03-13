<template>
    <div>
        <div class="">
             <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-white">USER Edit</h6>
                        <router-link :to="{name: 'UserManagement'}" class="btn bg-light btn-sm">Back To List</router-link>

                    </div>
                    <!-- Card Body -->
                    <div class="card-body">

                        <form @submit.prevent="updateUser" >
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

                                    <!-- <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">Password Confirmation</label>
                                            <input class="form-control" v-model="form.password_confirmation" type="password" >
                                             <small v-if="errors.password_confirmation" class="form-text text-danger">{{ errors.password_confirmation[0] }}</small>
                                        </div>
                                    </div> -->


                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">User Role</label>
                                        <select v-model="form.role" class="form-control filter-select" id="UserRole">
                                            <option value="">-- Select Role --</option>
                                             <option value="admin">Admin</option>
                                            <option value="superadmin">Super Admin</option>
                                            <option value="account">Account</option>
                                            <option value="dataentry">Data Entry</option>
                                        </select>
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
                                        </div>
                                    </div>

                                     <div class="col-md-3">
                            <div class="form-group">
                                <div class="form-group">
                                    <label id="PhotoPathLabel" for="PhotoPath">User Image</label><br>
                                    <input style="width: 103px" @change="changeImg" type="file" id="file">
                                </div>
                            </div>

                        </div>
                                </div>
                                
                                 <div  class="my-3 Preview">
                                    <img src="" id="uploadPreview" width="200px" class="companyimage" alt="">
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
              isImage: false,

            }
        },

        methods:{

            updateUser(){

              let id = this.$route.params.id;
             let data = new FormData();
                data.append('name', this.form.name);
                data.append('role', this.form.role);
                data.append('status', this.form.status);
                data.append('company_phone', this.form.company_phone);
                data.append('phone', this.form.phone);
                data.append('status', this.form.status);
                data.append('address', this.form.address);
                data.append('email', this.form.email);
                data.append('password', this.form.password);
                
                if(this.isImage){

                    data.append('image', document.getElementById('file').files[0])
                }

              axios.post(`update-user/${id}`, data).then(response =>{
               
                if(response.data.msg){
                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                  });

                  this.$router.push({name:'UserManagement'});
                }



              })
            },

             changeImg(e){
                this.isImage = true
            var image = document.getElementById('file');
            let form_img  = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);
            },


        },

        mounted() {
            let id = this.$route.params.id;
            axios.get(`edit-user/${id}`).then(res =>{
                this.form = res.data
            });
        }
    }
</script>
