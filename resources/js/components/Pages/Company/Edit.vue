<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Company/Delegate</h6>
                    <router-link :to="{name: 'Companies'}" class="btn btn-success btn-sm">Back To List</router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form @submit.prevent="updateCompany">
                        <div class="form-group row">

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="PerAddress">Company Name</label>
                                    <input class="form-control" v-model="form.company_name"  type="text">
                                    <small v-if="errors.company_name"
                                        class="form-text text-danger">{{ errors.company_name[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="PerAddress">Contact Person</label>
                                    <input class="form-control" v-model="form.contact_person" type="text">
                                    <small v-if="errors.contact_person"
                                        class="form-text text-danger">{{ errors.contact_person[0] }}</small>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="PerAddress">Phone No </label>
                                    <input class="form-control" v-model="form.company_phone" type="text">
                                    <small v-if="errors.company_phone"
                                        class="form-text text-danger">{{ errors.company_phone[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" v-model="form.company_email" type="email">
                                    <small v-if="errors.company_email"
                                        class="form-text text-danger">{{ errors.company_email[0] }}</small>
                                </div>
                            </div>

                        </div>

                        <div class="form-group row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="PerAddress">Company Address</label>
                                    <input class="form-control" v-model="form.company_address" type="text">
                                    <small v-if="errors.company_address"
                                        class="form-text text-danger">{{ errors.address[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserStatus">Country</label>
                                     <v-select  label="country_name" v-model="form.country_id" placeholder="Select" :options="country" />
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserStatus">Currrent Status</label>
                                    <select v-model="form.company_status" required class="form-control filter-select">
                                        <option value="">-- Select --</option>
                                        <option value="0">Active</option>
                                        <option value="1">In Active</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="sector">Country Sectors</label>
                                    <div class="form-control all_sectors filter-select">
                                        <div v-for="sector in sectors" :key="sector.id" class="list-of-yards">

                                            <div class="d-flex flex-row align-items-center">
                                                 <span>{{sector.sector_name}}</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="sector">Note</label>
                                    <textarea name="" v-model="form.company_note" class="form-control" id="" cols="30"
                                        rows="8"></textarea>
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label id="PhotoPathLabel" for="PhotoPath">Brand Logo</label><br>
                                        <input style="width: 103px" @change="changeImg"  type="file" id="file">
                                    </div>
                                </div>

                                <div class="Preview">
                                    <img src="" id="uploadPreview" class="companyimage"  alt="">
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
import 'vue-select/dist/vue-select.css';

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
                company_status: '',
                country_id: '',
                company_note: '',
               },
               errors: '',
               value: '',
               sectors:'',
               country: '',
               isImage: false,
            }
        },


        methods:{

            updateCompany(){
             
              let id = this.$route.params.id;

                let data = new FormData();
                data.append('company_name', this.form.company_name);
                data.append('company_address', this.form.company_address);
                data.append('contact_person', this.form.contact_person);
                data.append('company_phone', this.form.company_phone);
                data.append('company_email', this.form.company_email);
                data.append('company_status', this.form.company_status);
                data.append('country_id', this.form.country_id.id);
                data.append('company_note', this.form.company_note);

                if(this.isImage){

                    data.append('image', document.getElementById('file').files[0])
                }

              axios.post(`update-company/${id}`, data).then(response =>{
               
                if(response.data.msg){

                    this.isImage = false ;

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                      this.$router.push({name:'Companies'});
                }

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            },

            changecountry(){
                let id = this.form.country_id.id;
                axios.get(`country-sectors/${id}`).then(res =>{
                  this.sectors = res.data;
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
           
            axios.get(`edit-company/${id}`).then(res =>{
                this.form = res.data.company;
                this.form.country_id = res.data.country;
                this.changecountry();
            });

            axios.get("country").then(res =>{
               this.country = res.data;
            });

             axios.get(`country-sectors/${id}`).then(res =>{
                  this.sectors = res.data;
             });

        }
    }
</script>

<style scoped>
.form-control.all_sectors.filter-select {
    height: 200px;
    overflow-y: scroll;
}

.companyimage{
    width: 250px;
    height: 165px;
    object-fit: cover;
}
</style>
