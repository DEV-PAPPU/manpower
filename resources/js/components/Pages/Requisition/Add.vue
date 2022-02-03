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
                                    <select @change="changeCompany" v-model="form.company_id" class="form-control filter-select" required>
                                        <option value="">-- Select company --</option>
                                        <option v-for="company in companies" :key="company.id" :value="company.id">
                                            {{company.company_name}}</option>
                                    </select>
                                    <small v-if="errors.company_id"
                                        class="form-text text-danger">{{ errors.company_id[0] }}</small>
                                    
                                </div>
                            </div>

                            <div  class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Sector</label>
                                 
                                    <select v-model="form.sector_id" multiple="true" class="form-control filter-select">
                                        <option value="" selected >-- Select Sector --</option>
                                        <option v-for="sector in companysectors" :key="sector.id" :value="sector" required>
                                            {{sector.sector_name}}</option>
                                    </select>   
                                     
                                    <small v-if="errors.sector_id"
                                        class="form-text text-danger">{{ errors.sector_id[0] }}</small>
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

import VisaForm  from './VisaForm.vue'
import axios from 'axios'
    export default {
        components:{VisaForm},
        data: () =>{
            return {
                form:{
                kafil_iD: '',
                requisition_date: '',
                sector_id: [],
                company_id: '',
                is_approved: '',
                visaFormdata:[],
                tradeFormdata:[],
                
               },
               errors: '',
               companies:[],
               companysectors:'',


            }
        },

        methods:{
            addRequisition(){
             
              axios.post('add-requisition', this.form).then(response =>{
               
                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                    this.$router.push({name:'RequisitionList'});
                }

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            },

            formData(event){
                this.form.visaFormdata = event.visa;
                this.form.tradeFormdata = event.trade;
            },

            changeCompany(){
                
                let id = this.form.company_id;

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

        computed:{

         sector_of_company(){
             return  this.companysectors.filter(item => item.company_id === this.form.company_id);
         }
  
        },

        mounted() {
            axios.get('companies').then(response =>{
                this.companies = response.data.companies;
                // this.companysectors = response.data.companysector;
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
