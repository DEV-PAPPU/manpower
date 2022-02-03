<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">COMPANY Entry</h6>
                    <router-link :to="{name: 'Companies'}" class="btn btn-success btn-sm">Back To List</router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form @submit.prevent="addCompany">
                        <div class="form-group row">

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="PerAddress">Company Name</label>
                                    <input class="form-control" v-model="form.company_name" required type="text">
                                    <small v-if="errors.company_name"
                                        class="form-text text-danger">{{ errors.company_name[0] }}</small>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="PerAddress">Company Address</label>
                                    <input class="form-control" v-model="form.company_address" type="text">
                                    <small v-if="errors.company_address"
                                        class="form-text text-danger">{{ errors.address[0] }}</small>
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
                                    <input class="form-control" v-model="form.company_phone" required type="text">
                                    <small v-if="errors.company_phone"
                                        class="form-text text-danger">{{ errors.company_phone[0] }}</small>
                                </div>
                            </div>


                        </div>

                        <div class="form-group row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input class="form-control" v-model="form.company_email"
                                        placeholder="Please enter email " type="email">
                                    <small v-if="errors.company_email"
                                        class="form-text text-danger">{{ errors.company_email[0] }}</small>

                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserStatus">Is Approved</label>
                                    <select v-model="form.is_approved" required class="form-control filter-select">
                                        <option value="">-- Select Status --</option>
                                        <option value="0">Active</option>
                                        <option value="1">In Active</option>
                                    </select>
                                </div>
                            </div>

                             <div class="col-md-3">
                                <div class="form-group">

                                    <label for="sector">Sectors</label>

                                    <div class="form-control all_sectors filter-select">
                                         <div  v-for="sector in sectors" :key="sector.id" @click="lelectSector(sector)"
                                        class="list-of-yards">
                                        
                                        <div class="d-flex flex-row align-items-center gap-2">
                                            <input type="checkbox" :value="sector.id">
                                            <p>{{sector.sector_name}}</p>
                                        </div>
                                    </div>

                                    </div>
                                    <small v-if="errors.sector_id"
                                        class="form-text text-danger">{{ errors.sector_id[0] }}</small>

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
import Multiselect from 'vue-multiselect'

import axios from 'axios'
    export default {
        components:{Multiselect},
        // components: { Multiselect: window.VueMultiselect.default },
        data: () =>{
            return {
                form:{
                company_name: '',
                company_address: '',
                contact_person: '',
                company_phone: '',
                company_email: '',
                is_approved: '',
                sector_id: [],
               },
               errors: '',
               value: '',
               sectors:[]
            }
        },

        methods:{

            addCompany(){
             
              axios.post('add-company', this.form).then(response =>{
               
                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                      this.$router.push({name:'Companies'});
                }

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors;
                     alert('someting is wrong reload page and try again')                     
                });
            },

            lelectSector(sector){

                //checking is item in list  or not
                let item = this.form.sector_id.filter(a => a.id == sector.id)
                if(item.length){

                    let index = this.form.sector_id.indexOf(sector);
                    this.form.sector_id.splice(index, 1);

                   console.log('new items',this.form.sector_id.length)
                }

                // if item not in list then push this iten in list
                else{
                    this.form.sector_id.push(sector);
                    console.log('old items',this.form.sector_id.length)
                }

            }

        },

        mounted() {
            axios.get("sectors").then(res =>{
                this.sectors = res.data
            })
        }
    }
</script>

<style scoped>
.form-control.all_sectors.filter-select {
    height: 100px;
    overflow-y: scroll;
}
</style>
