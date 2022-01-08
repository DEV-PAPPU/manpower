<template>
    <div>
        <div class="">
             <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-white">COMPANY ENTRY</h6>
                        <router-link :to="{name: 'Companies'}" class="btn btn-success btn-sm">Back To List</router-link>

                    </div>
                    <!-- Card Body -->
                    <div class="card-body">

                        <form @submit.prevent="addCompany" >
                              <div class="form-group row">

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="PerAddress">Company Name</label>
                                            <input class="form-control" v-model="form.company_name" placeholder="Please enter company name" type="text" >
                                            <small v-if="errors.company_name" class="form-text text-danger">{{ errors.company_name[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="PerAddress">Company Address</label>
                                            <input class="form-control" v-model="form.company_address" placeholder="Please enter company address" type="text" >
                                            <small v-if="errors.company_address" class="form-text text-danger">{{ errors.address[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="PerAddress">Contact Person</label>
                                            <input class="form-control" v-model="form.contact_person" placeholder="Please enter contact persone" type="text" >
                                            <small v-if="errors.contact_person" class="form-text text-danger">{{ errors.contact_person[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="PerAddress">Phone No </label>
                                            <input class="form-control" v-model="form.company_phone" placeholder="Please enter phone no" type="text" >
                                            <small v-if="errors.company_phone" class="form-text text-danger">{{ errors.company_phone[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="email">Email</label>
                                            <input class="form-control" v-model="form.company_email" placeholder="Please enter email " type="email" >
                                            <small v-if="errors.company_email" class="form-text text-danger">{{ errors.company_email[0] }}</small>

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
                company_name: '',
                company_address: '',
                contact_person: '',
                company_phone: '',
                company_email: '',
                sector_id: ''
               },
               errors: '',
            }
        },

        methods:{

            addCompany(){
             
              axios.post('add-company', this.form).then(response =>{
               
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
