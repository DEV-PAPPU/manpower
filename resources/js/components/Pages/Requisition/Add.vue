<template>
    <div>
        <div class="">
            <CompanyForm v-on:newCompany="newCompany($event)"/>
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Requisition Entry</h6>
                    <router-link :to="{name: 'RequisitionList'}" class="btn bg-light btn-sm">Back To List</router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form>
                        <div class="form-group row">

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Username">Kafil ID</label>
                                    <input class="form-control" v-model="form.kafil_id" type="number" required>
                                    <small v-if="errors.kafil_id"
                                        class="form-text text-danger">{{ errors.kafil_id[0] }}</small>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label >Requisition Date</label>
                                    <input class="form-control" v-model="form.requisition_date" type="date" required>
                                    <small v-if="errors.requisition_date"
                                        class="form-text text-danger">{{ errors.requisition_date[0] }}</small>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Company Name</label>
                                     <v-select label="company_name" v-model="form.company_id" placeholder="-- Select company --" :options="companies" />

                                    <small v-if="errors.company_id"
                                        class="form-text text-danger">{{ errors.company_id[0] }}</small>
                                    
                                </div>
                            </div>

                            <div  class="col-md-3">
                                <div class="form-group">
                                    <label for="Sector">Sector</label>
                                
                                 <v-select multiple  label="sector_name" v-model="form.sectors" placeholder="Select Sector" :options="companysectors" />
                                </div>

                            </div>
                            

                            <div class="mt-3">
                                <VisaForm v-on:formData="formData($event)"/>
                            </div>

                        </div>

                        <div class="form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button class="btn btn-success" @click.prevent="addRequisition">Save Changes</button>
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
import 'vue-select/dist/vue-select.css';
import CompanyForm  from './CompanyForm.vue'
import VisaForm  from './VisaForm.vue'
import axios from 'axios'
    export default {
        components:{VisaForm,CompanyForm},
        data: () =>{
            return {
                form:{
                kafil_id: '',
                requisition_date: '',
                sectors: [],
                company_id: '',
                is_approved: '',
                visaFormdata:[],
                tradeFormdata:[],
                
               },
               errors: '',
               companies:[],
               companysectors:[],

            }
        },

        methods:{
            addRequisition(){

                const form = {

                    kafil_id: this.form.kafil_id,
                    requisition_date: this.form.requisition_date,
                    sectors: this.form.sectors,
                    company_id: this.form.company_id.id,
                    visaFormdata: this.form.visaFormdata,
                    tradeFormdata: this.form.tradeFormdata

                }

            if(!this.form.sectors.length){
                alert('Please check all fields');       
            }
            else{
                 axios.post('add-requisition', form).then(response =>{
               
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
                     this.errors = e.response.data.errors                     
                });
            }

             
            },

            formData(event){
                this.form.visaFormdata = event.visa;
                this.form.tradeFormdata = event.trade;
            },

            changeCompany(){
                
                let id = this.form.company_id.id;
                this.form.sectors = null ;
                axios.get(`search-sector-by-company/${id}`).then(res =>{
                   this.companysectors = res.data.data
                  
                  if(res.data.msg){
                        Toast.fire({
                        icon: 'error',
                        title: res.data.msg
                        });
                    }
                })
            },


            newCompany(){

                 axios.get('companies').then(response =>{
                    this.companies = response.data.companies;
                });
            }

        },

        computed:{

         sector_of_company(){
             return  this.companysectors.filter(item => item.company_id === this.form.company_id);
         }
  
        },

         watch: { 
         'form.company_id.id': {
            handler(newVal, oldVal) {
                this.changeCompany();
             },
            deep: true
            }
       },

        mounted() {
            axios.get('companies').then(response =>{
                this.companies = response.data.companies;
                // this.companysectors = response.data.companysector;
              });

            axios.get('trade/lists').then(response =>{
                this.trades = response.data;
              });
        }
    }
</script>

<style scoped>
.visinfo_btn{
    margin-top: 36px !important;
}

table.dataTable thead th, table.dataTable thead td {
    font-size: 13px;
    color: rgb(43, 43, 43);
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 13;
}

.form-control.all_sectors.filter-select {
    height: 200px;
    overflow-y: scroll;
}
</style>
