<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Mofa Entry</h6>
                    <router-link :to="{name: 'MofaInformationlist'}" class="btn btn-success btn-sm">Back To List
                    </router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">Search Passport</label>
                                <input v-model="searchFrom.passport_no" class="form-control" type="text">
                            </div>
                        </div>

                        <div class="search_btn mt-4 col-md-2">
                            <button class="btn btn-success px-3" @click.prevent="searchPassport">Search<i
                                    class="mx-2 fas fa-plus-circle"></i></button>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="DOB">Passport No.</label>
                                <input v-model="form.passport_no" class="form-control" readonly type="text">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="form.passenger_name" class="form-control" readonly type="text">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="name">Phone No.</label>
                                <input v-model="form.passenger_phone" class="form-control" readonly type="text">
                            </div>
                        </div>
                    </div>

                    <form @submit.prevent="Addmofa">
                        <div class="form-group row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Company</label>
                                    <select @change="changeCompany" v-model="form.company_id"
                                        class="form-control filter-select" required>
                                        <option value="">-- Select company --</option>
                                        <option v-for="item in companies" :key="item.id" :value="item.id">
                                            <p>{{item.company_name}}</p>
                                        </option>
                                    </select>
                                    <small v-if="errors.passenger_id"
                                        class="form-text text-danger">{{ errors.passenger_id[0] }}</small>

                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UserRole">Company Sector</label>
                                    <select v-model="form.company_sector_id" class="form-control filter-select"
                                        required>
                                        <option value="">-- Select sector --</option>
                                        <option v-for="item in companysectors" :key="item.id" :value="item.sector.id">
                                            {{item.sector.sector_name}}
                                        </option>
                                    </select>


                                    <small v-if="errors.passenger_id"
                                        class="form-text text-danger">{{ errors.passenger_id[0] }}</small>

                                </div>
                            </div>

                            <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="UserRole">Visa & Trade</label>
                                        <select v-model="form.trade_id" class="form-control filter-select" required>
                                            <option value="">-- Select trade --</option>
                                            <option v-for="item in trades" :key="item.id" :value="item.id">
                                                <p>Visa No: {{item.trade_visa_no}} > Trade: {{item.trade}} > Salary:
                                                    {{item.salary}}
                                                    > Price: {{item.price_reference}}
                                                </p>
                                            </option>
                                        </select>


                                        <small v-if="errors.passenger_id"
                                            class="form-text text-danger">{{ errors.passenger_id[0] }}</small>

                                    </div>
                                </div>


                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="email">Discount</label>
                                    <input class="form-control" v-model="form.discount" type="number">

                                </div>
                            </div>

                            <div class="form-group mt-3 row">
                                <div class="col-md-4" style="clear:both;">
                                    <button class="btn btn-success" type="submit">Save Changes</button>
                                    <button class="btn btn-danger" type="reset">Cancel</button>
                                </div>
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
                    passenger_id: '',
                    company_id: '',
                    company_sector_id: '',
                    trade_id: '',
                    discount: '',
                    passport_no: "",
                    passenger_name: "",
                    passenger_phone: "",
                },
                companies: [],
                trades: [],
                companysectors:'',
                errors: '',
                passenger: '',

            searchFrom:{
              passport_no: '',
            },

            }
        },

        methods:{

            searchPassport(){

                axios.post('search-passenger', this.searchFrom).then(res =>{
                    
                    if(!res.data.error_msg){
                        this.form.passenger_id = res.data.passenger.id;
                        this.form.passenger_name = res.data.passenger.passenger_name;
                        this.form.passport_no = res.data.passenger.passport_no;
                        this.form.passenger_phone = res.data.passenger.passenger_phone;
                    }

                    if(res.data.error_msg){
                        Toast.fire({
                            icon: 'error',
                            title: res.data.error_msg
                       });

                        this.form.passenger_id = '';
                        this.form.passenger_name = '';
                        this.form.passport_no = '';
                        this.form.passenger_phone = '';
                     }
                    
                })
            },

            Addmofa(){
             
              axios.post('add-mofaInformation', this.form).then(response =>{
               
                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                      this.$router.push({name:'MofaInformationlist'});
                }

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            },

            changeCompany(){
                axios.post('trade-search-by-company', this.form).then(res =>{
                   this.trades = res.data.trade;
                   this.companysectors = res.data.companysectors;
                   if(res.data.msg){

                        Toast.fire({
                        icon: 'error',
                        title: res.data.msg
                        });
                    }
                })
            }

        },

        computed:{

         passenger_agent(){
             return  this.passengers.filter(item => item.id === this.form.passenger_id);
         }
  
        },

        mounted() {
            axios.get("companies").then(res =>{
                this.companies = res.data.companies;
            });
        },
    }
</script>
