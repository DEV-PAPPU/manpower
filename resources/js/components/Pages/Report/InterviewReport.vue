<template>
    <div class="">
                 <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">{{processing_info.label}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Date: {{processing_info.date}}
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                      <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Interview Report</h6>
                <button  @click="reloadPage" class="btn bg-light btn-sm">Refresh</button>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <form @submit.prevent="filterData">
                    <div class="row">
                       
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">From Date</label>
                                <input v-model="form.start_date" class="form-control" type="date">
                            </div>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">To Date</label>
                                <input v-model="form.end_date" class="form-control" type="date">
                            </div>
                        </div>

                        <div class="col-md-2">
                                <div class="form-group">
                                    <label for="name">Medical</label>
                                    <select v-model="form.medical"  class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="0">Gone</option>
                                        <option value="1">Fit</option>
                                        <option value="2">Unfit</option>
                                    </select>
                                </div>
                        </div>

                         <div class="col-md-2">
                            <div class="form-group">
                                <label for="PassengerName">Police Clearance</label>
                                 <select v-model="form.p_c"  class="form-control filter-select">
                                    <option value="">-- Select --</option>
                                    <option value="1">Complete</option>
                                    <option value="0">Pending</option>
                                </select>
                            </div>
                        </div>

                    
                         

                         <div class="col-md-2">
                                <div class="form-group">
                                    <label for="name">T.C RCV</label>
                                    <select v-model="form.t_c"  class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="1">Complete</option>
                                       <option value="0">Pending</option>
                                    </select>
                                </div>
                        </div>



                    </div>

                    <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Company">Company</label>
                                    <v-select label="company_name" v-model="form.company_id" placeholder="-- Select --" :options="company" />
                                </div>
                        </div>

                        <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Company">Visa No. </label>
                                    <div class="d-flex gap-1" >
                                        <input type="text" v-model="form.visa_no" class="form-control">
                                      <i v-if="form.visa_no" @click="getCompanyByVisaNo" class="mt-2  cursor fas fa-plus-circle"></i>
                                    </div>
                                </div>
                        </div>
                        

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="UserRole">Trade</label>
                             <v-select  label="trade_name" v-model="form.trade" placeholder="Trade" :options="trades" />

                                <!-- <select v-model="form.trade" class="form-control filter-select">
                                    <option value="">-- Select --</option>
                                    <option value="helper">Helper</option>
                                    <option value="cleaner">Cleaner</option>
                                </select> -->
                            </div>
                        </div>


                        <div class="col-md-3">
                                <div class="form-group">
                                    <label for="sector">Sector</label>
                                    <v-select label="sector_name" v-model="form.sector_id" placeholder="Select" :options="sectors" />
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
                <h6 class="m-0 font-weight-bold text-white">Interview Report</h6>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th style="width:100px">Passenger Name</th>
                                <th style="width:100px">Passport No</th>
                                <th style="width:100px">Company</th>
                                <th style="width:100px">Visa No.</th>
                                <th style="width:100px">Trade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in passengers" :key="item.id">
                                <td>{{item.passenger_name}}</td>
                                <td>{{item.passport_no}}</td>
                                <td>{{item.company_name}}</td>
                                <td>{{item.visa_no}}</td>
                                <td>{{item.trade}}</td>                                
                                                             
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
import 'vue-select/dist/vue-select.css';

import $ from 'jquery'; 

export default {
     metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Interview Report'
    },

    data : () =>{
        return {
            date : '',
            form:{
                start_date: '',
                end_date:'',
                trade: '',
                company_id: '',
                sector_id: '',
                visa_no: '',
                medical: '',
                t_c: '',
                p_c: '',
            },
            passengers: '',
            company: '',
            agents: '',
            trades: '',
            sectors: '',
            processing_info: {
                label: '',
                date: '',
            },
        }
    },

    methods:{
        filterData(){
  
               let data = new FormData();
                data.append('start_date', this.form.start_date);
                data.append('end_date', this.form.end_date);
               
                if(this.form.trade == null){
                    this.form.trade = '';
                }
                else if(this.form.trade.trade_name){
                    data.append('trade', this.form.trade.trade_name);
                }

                if(this.form.sector_id == null){
                    this.form.sector_id = '';;
                }
                else if(this.form.sector_id.id){
                    data.append('sector_id', this.form.sector_id.id);
                }


                if(this.form.company_id == null){
                   
                   this.form.company_id = '';

                }
                else if(this.form.company_id.id){
                     data.append('company_id', this.form.company_id.id);
                }

               
                data.append('visa_no', this.form.visa_no);
                data.append('medical', this.form.medical);
                data.append('p_c', this.form.p_c);
                data.append('t_c', this.form.t_c);

                

            axios.post('filter/interview', data).then(res =>{
                
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



         stmProcessDate(id){
            
            axios.get(`stm/processing-date/${id}`).then((res)=>{
                this.processing_info.label = res.data.label;
                this.processing_info.date = res.data.date;
                console.log('l',res.data.label)
                console.log('d',res.data.date)
            })
        },

        reloadPage(){
            window.location.reload()        }

    },

    mounted(){
         axios.get("companies").then(res =>{
                this.company = res.data.companies;
        });
        axios.get("sectors").then(res =>{
                this.sectors = res.data;
        });

         axios.get('trade/lists').then(response =>{
                this.trades = response.data;
              });
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