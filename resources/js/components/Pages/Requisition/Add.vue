<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">AgentEntry</h6>
                    <router-link :to="{name: 'RequisitionList'}" class="btn bg-light btn-sm">Back To List</router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form @submit.prevent="addAgent">
                        <div class="form-group row">

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Username">Kafil ID</label>
                                    <input class="form-control" v-model="form.agent_name" type="number">
                                    <small v-if="errors.agent_name"
                                        class="form-text text-danger">{{ errors.agent_name[0] }}</small>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="agent_email">Requisition Date</label>
                                    <input class="form-control" v-model="form.agent_email"
                                        placeholder="Please enter agent_email " type="agent_email">
                                    <small v-if="errors.agent_email"
                                        class="form-text text-danger">{{ errors.agent_email[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Company Name</label>
                                    <select v-model="form.district_id" class="form-control filter-select" id="UserRole">
                                        <option value="">=== Select District ===</option>
                                        <option v-for="district in districts" :key="district.id" :value="district.id">
                                            {{district.district_name}}</option>
                                    </select>
                                    <small v-if="errors.district_id"
                                        class="form-text text-danger">{{ errors.district_id[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Sectore</label>
                                    <select v-model="form.district_id" class="form-control filter-select" id="UserRole">
                                        <option value="">=== Select District ===</option>
                                        <option v-for="district in districts" :key="district.id" :value="district.id">
                                            {{district.district_name}}</option>
                                    </select>
                                    <small v-if="errors.district_id"
                                        class="form-text text-danger">{{ errors.district_id[0] }}</small>
                                </div>
                            </div>

                            <div class="mt-3">
                                <h5 class="my-2">Vasi & Trade Info</h5>
                                <form @submit.prevent="formvisa()" >
                                <div class="row">
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="Username">Visa No</label>
                                            <input class="form-control" v-model="visaForm.visa_no" required type="number">
                                        </div>
                                    </div>
                                    <div class="col-md-1">
                                        <div class="form-group">
                                            <label for="Username">Qty</label>
                                            <input class="form-control" v-model="visaForm.visa_qty" required type="number">
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="UserRole">Trade</label>
                                        <select v-model="visaForm.trade" required class="form-control filter-select" id="UserRole">
                                            <option value="">--- Select Trade ---</option>
                                            <option value="helper">Helper</option>
                                            <option value="cleaner">Cleaner</option>
                                        </select>
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="Username">Salary</label>
                                            <input class="form-control" v-model="visaForm.salary" required type="number">
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="Username">Price/Reference</label>
                                            <input class="form-control" v-model="visaForm.price_peference" required type="number">
                                           
                                        </div>
                                    </div>

                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="Username">Duty Hours</label>
                                            <input class="form-control" v-model="visaForm.duty_hours" required type="number">
                                        </div>
                                    </div>

                                    <div class="col-md-1">
                                        <div class="mt-4">
                                        <button class="btn btn-success" type="submit"><i class="fas fa-plus-circle"></i></button>
                                        
                                         <button class="btn btn-danger" type="reset"><i class="fas fa-minus-circle"></i></button>
                                         </div>
                                    </div>

                                </div>
                                </form>

                                {{visaFormdata}}
                            </div>

                        </div>

                        <div class="form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button class="btn btn-success" type="submit">Save Changes</button>
                                <button class="btn btn-danger" type="reset">Cancle</button>
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
                agent_name: '',
                agent_area: '',
                agent_phone: '',
                agent_address: '',
                agent_email: '',
                district_id: '',
                agent_is_approved: ''
               },
               errors: '',
               districts:[],

               visaForm:{
                 visa_no: '',
                 visa_qty: '',
                 trade: '',
                 salary: '',
                 price_peference: '',
                 duty_hours: '',
               },

               visaFormdata:[]
            }
        },

        methods:{

            addAgent(){
             
              axios.post('add-agent', this.form).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            },

            formvisa(){

                let  data = {
                    visa_no: this.visaForm.visa_no,
                    visa_qty: this.visaForm.visa_qty,
                    trade: this.visaForm.trade,
                    salary: this.visaForm.salary,
                    price_peference: this.visaForm.price_peference,
                    duty_hours: this.visaForm.duty_hours,
                };

                this.visaFormdata.push(data)
            }

            

        },

        mounted() {
            axios.get('districts').then(response =>{
                this.districts = response.data;
              })
        }
    }
</script>
