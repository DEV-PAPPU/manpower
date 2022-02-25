<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Requisition Entry</h6>
                    <router-link :to="{name: 'RequisitionList'}" class="btn bg-light btn-sm">Back To List</router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form >
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
                                    <select v-model="form.company_id" class="form-control filter-select" required>
                                        <option value="">-- Select District --</option>
                                        <option v-for="company in companies" :key="company.id" :value="company.id">
                                            {{company.company_name}}</option>
                                    </select>
                                    <small v-if="errors.company_id"
                                        class="form-text text-danger">{{ errors.company_id[0] }}</small>
                                    
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Sector</label>
                                    <select v-model="form.sector_id" class="form-control filter-select">
                                        <option value="">-- Select Sector --</option>
                                        <option v-for="sector in sector_of_company" :key="sector.id" :value="sector.id" required>
                                            {{sector.sector_name}}</option>
                                    </select>
                                    <small v-if="errors.sector_id"
                                        class="form-text text-danger">{{ errors.sector_id[0] }}</small>
                                </div>
                            </div>
                            
                            <div class="col-md-3">
                                <div class="form-group">
                                     <label>Is Approved</label>
                                         <select v-model="form.is_approved" class="form-control filter-select">
                                            <option value="">-- Select --</option>
                                            <option value="0">Approved</option>
                                            <option value="1">Pending</option>
                                        </select>
                                    <small v-if="errors.is_approved"
                                        class="form-text text-danger">{{ errors.is_approved[0] }}</small>
                                </div>
                            </div>

                            <div class="mt-3">
                                <div class="mt-3">
                                    <h5 class="my-2">Vasi & Trade Info</h5>
                                    <form  @submit.prevent="formvisa()">
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
                                                    <input class="form-control" v-model="visaForm.visa_qty" required  type="number">
                                                </div>
                                            </div>

                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="UserRole">Trade</label>
                                                    <select v-model="visaForm.trade" required
                                                        class="form-control filter-select" id="UserRole">
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
                                                    <input class="form-control" v-model="visaForm.price_reference" required type="number">

                                                </div>
                                            </div>

                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label for="Username">Duty Hours</label>
                                                    <input class="form-control" v-model="visaForm.duty_hours" required type="number">
                                                </div>
                                            </div>

                                            <div class="col-md-1">
                                                <div class="visinfo_btn">
                                                    <button class="btn btn-success btn-sm"
                                                       type="submit"><i
                                                            class="fas fa-plus-circle"></i></button>

                                                    <button class="btn btn-danger btn-sm" type="reset"><i
                                                            class="fas fa-eraser"></i></button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                    <div v-if="visaFormdata.length > 0" class="database__table">
                                        <table class="table table-hover table-bordered" id="example">
                                            <thead>
                                                <tr>
                                                    <th>Visa No</th>
                                                    <th>Qty</th>
                                                    <th>Trade</th>
                                                    <th>Salary</th>
                                                    <th>Price/Ref.</th>
                                                    <th>Duty</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="visa in visaFormdata" :key="visa.visa_no">
                                                    <td>{{visa.visa_no}}</td>
                                                    <td>{{visa.visa_qty}}</td>
                                                    <td>{{visa.trade}}</td>
                                                    <td>{{visa.salary}}</td>
                                                    <td>{{visa.price_reference}}</td>
                                                    <td>{{visa.duty_hours}}</td>
                                                    <td>

                                                        <a href="#" @click="removeVisa(visa)" class="btn brn-danger"><i
                                                                class="fas delete_icon fa-trash-alt">
                                                                Remove</i></a>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>

                                </div>

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

import VisaForm  from './VisaForm.vue'
import axios from 'axios'
    export default {
        components:{VisaForm},
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
                }

        },

        computed:{

         sector_of_company(){
             return  this.companysectors.filter(item => item.company_id === this.form.company_id);
         }
  
        },

        mounted() {
            let id = this.$route.params.id;
               axios.get(`edit-requisition/${id}`).then(res =>{
                this.form = res.data
             });

            axios.get('companies').then(response =>{
                this.companies = response.data.companies;
                this.companysectors = response.data.companysector;
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