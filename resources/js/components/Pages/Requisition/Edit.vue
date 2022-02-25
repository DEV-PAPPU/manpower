<template>
    <div>
        <div class="">
            <CompanyForm v-on:newCompany="newCompany($event)"/>
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Requisition Edit</h6>
                    <router-link :to="{name: 'Companies'}" class="btn bg-light btn-sm">Back To List</router-link>
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
                                <button class="btn btn-success" @click.prevent="updateRequisition">Save Changes</button>
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
                kafil_iD: '',
                requisition_date: '',
                sector_id: '',
                company_id: '',
                is_approved: '',
                visaFormdata:[]
                

               },
               errors: '',
               companies:[],
               companysectors:[],

               visaForm:{
                 visa_no: '',
                 visa_qty: '',
                 trade: '',
                 salary: '',
                 price_reference: '',
                 duty_hours: '',
               },

               visaFormdata:[]
            }
        },

        methods:{

            updateRequisition(){
             
              this.form.visaFormdata = this.visaFormdata;
              let id = this.$route.params.id;
              axios.post(`update-requisition/${id}`, this.form).then(response =>{
               
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

                   let  newData = {
                        visa_no: this.visaForm.visa_no,
                        visa_qty: this.visaForm.visa_qty,
                        trade: this.visaForm.trade,
                        salary: this.visaForm.salary,
                        price_reference: this.visaForm.price_reference,
                        duty_hours: this.visaForm.duty_hours,
                    };

                    this.visaFormdata.push(newData);

                },


                removeVisa(visa){
                    // let data = this.visaFormdata.filter(item => item.visa_no !== visa.visa_no);
                    let index = this.visaFormdata.indexOf(visa);
                    this.visaFormdata.splice(index, 1);
                },

                newCompany(){

                 axios.get('companies').then(response =>{
                    this.companies = response.data.companies;
                });
            }

        },

        computed:{

         sector_of_company(){
             return  this.companysectors.filter(item => item.company_id === this.form.company_id.id);
         }
  
        },

        mounted() {
            let id = this.$route.params.id;
               axios.get(`edit-requisition/${id}`).then(res =>{
                this.form = res.data.requisition;
                this.form.company_id = res.data.company;
                this.form.sector_id = res.data.sector;
             });

            axios.get('companies').then(response =>{
                this.companies = response.data.companies;
              });
              
            axios.get('sectors').then(response =>{
                this.companysectors = response.data;
            });

              this.load_Visa_form_data();
               
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
</style>