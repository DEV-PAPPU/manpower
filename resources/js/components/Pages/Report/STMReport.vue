<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">STM REPORT</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <form @submit.prevent="filterData">
                    <div class="row">
                       
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="PassengerName">From Date</label>
                                <input v-model="form.stm_date" class="form-control" type="date">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="PassengerName">To Date</label>
                                <input v-model="form.stm_end_date" class="form-control" type="date">
                            </div>
                        </div>

                         <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Company">Visa No. </label>
                                    <div class="d-flex gap-1" >
                                        <input type="text" v-model="form.visa_no" required class="form-control">
                                      <i @click="getCompanyByVisaNo" class="mt-2  cursor fas fa-plus-circle"></i>
                                    </div>
                                </div>
                        </div>

                         <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Company">Company</label>
                                    <!-- <v-select label="company_name" v-model="form.company_id" placeholder="-- Select --" :options="companies" /> -->
                                    <input type="text" v-model="company.company_name" readonly class="form-control">
                                </div>
                        </div>

                        <div class="col-md-2">
                                <div class="form-group">
                                    <label for="sector">Sector</label>
                                    <v-select label="sector_name" v-model="form.sector_id" placeholder="Select" :options="sectors" />
                                </div>
                            </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="UserRole">Trade</label>
                                <select v-model="form.trade" class="form-control filter-select">
                                    <option value="">-- Select --</option>
                                    <option value="helper">Helper</option>
                                    <option value="cleaner">Cleaner</option>
                                </select>
                            </div>
                        </div>


                    </div>

                    <div class="row">
                       
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">STM Status</label>
                                 <select v-model="form.stm_status"  class="form-control filter-select">
                                    <option value="">-- Select --</option>
                                    <option value="1">Complete</option>
                                    <option value="0">Processing</option>
                                </select>
                            </div>
                        </div>

                         <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Medical</label>
                                    <select v-model="form.medical"  class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="0">Gone</option>
                                        <option value="1">Fit</option>
                                    </select>
                                </div>
                            </div>


                    </div>

                    <div class="form-group row">
                        <div class="col-md-4" style="clear:both;">
                            <button class="btn btn-success" type="submit">Filter Report</button>
                            <button class="btn btn-danger" type="reset">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

          <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger List</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th style="width:60px">S/L</th>
                                <th style="width:100px">Passenger Name</th>
                                <th style="width:100px">Passport No</th>
                                <th style="width:100px">Mobile</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.id}}</td>
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passport_no}}</td>
                                <td>{{item.passenger_phone}}</td>                                
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import "datatables.net-buttons/js/dataTables.buttons.js"
import "datatables.net-buttons/js/buttons.colVis.js"
import "datatables.net-buttons/js/buttons.flash.js"
import "datatables.net-buttons/js/buttons.html5.js"
import "datatables.net-buttons/js/buttons.print.js"

import $ from 'jquery'; 

export default {
     metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'STM Report'
    },

    data : () =>{
        return {
            date : '',
            form:{
                stm_date: '',
                stm_end_date:'',
                trade: '',
                company_id: '',
                sector_id: '',
                visa_no: '',
                medical: '',
                stm_status: '',
            },
            passengers: '',
            company: '',
            agents: '',
            sectors: '',
        }
    },

    methods:{
        filterData(){

               let data = new FormData();
                data.append('stm_date', this.form.stm_date);
                data.append('stm_end_date', this.form.stm_end_date);
                data.append('trade', this.form.trade);
                data.append('sector_id', this.form.sector_id.id);
                data.append('visa_no', this.form.visa_no);
                data.append('medical', this.form.medical);
                data.append('stm_status', this.form.stm_status);

            axios.post('filter/stm', data).then(res =>{
                
                if(!res.data.error_msg){
                   this.passengers = res.data.passenger;
                    
                }

                if(res.data.error_msg){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error_msg
                   });
                }
            })

            
        },

        getCompanyByVisaNo(){
            axios.post('filter/company/by-visa-no', {
                visa_no : this.form.visa_no
            }).then(res =>{
                
                 if(!res.data.error_msg){
                     this.company = res.data.company
                     this.sectors = res.data.sector
                 }

                 if(res.data.error_msg){
                     Toast.fire({
                        icon: 'error',
                        title: res.data.error_msg
                   });
                 }
            })
        }

    },

    // watch: { 
    //      'form.visa_no': {
    //         handler(newVal, oldVal) {
    //             this.getCompanyByVisaNo();
    //          },
    //         deep: true
    //         }
    // },

    mounted(){
         axios.get("agents").then(res =>{
           this.agents = res.data
        });
        axios.get("districts").then(res =>{
           this.districts = res.data
        });

        axios.get("companies").then(res =>{
                this.companies = res.data.companies;
        });
        axios.get("sectors").then(res =>{
                this.sectors = res.data;
        });

        // setTimeout(() => {
        //     $(".dbtable").DataTable({
        //             pagingType: 'full_numbers',
        //         pageLength: 10,
        //         processing: true,
        //             dom: 'Bfrtip',
        //         buttons: [
        //             'copy', 'csv', 'excel', 'pdf', 'print'
        //         ]                          
        //     });
        //     });
    }

}
</script>


<style scoped>
.search_btn{
    margin-top: 30px;
}

table.dataTable thead th, table.dataTable thead td {
    font-size: 13px;
    font-weight: 500;
    color: rgb(43, 43, 43);
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 14;
}
</style>