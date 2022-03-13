<template>
    <div class="">

         <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Print</h6>
                <button @click="showCard" class="btn bg-light btn-sm">Toggle</button>
            </div>
            <!-- Card Body -->
            <div v-if="isShowCard" class="card-body">
                <div class="form">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">Search Passport</label>
                                <input v-model="searchFrom.passport_no" class="form-control" type="text">
                            </div>
                        </div>

                        <div class="search_btn col-md-4">
                            <button class="btn btn-success px-3" @click.prevent="searchPassport">Search<i
                                    class="mx-2 fas fa-plus-circle"></i></button>
                        </div>

                    </div>

                    <form>
                        <div class="form-group row">

                            <div class="col-md-2">
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
                                    <label for="trade">Trade</label>
                                    <input v-model="form.trade" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="comapnyname">Company Name</label>
                                    <input v-model="form.company_name" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div v-if="form.passport_source == 'self' || form.passport_source == 'proccess' " class="col-md-2">
                                <div class="form-group">
                                    <label for="agent">Passenger Source </label>
                                    <input v-model="form.passport_source" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div v-else class="col-md-2">
                                <div class="form-group">
                                    <label for="agent">Agent </label>
                                    <input v-model="form.agent_name" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="agent">STM Status</label>
                                    <input v-model="form.stm_status" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="agent">Man Power Status</label>
                                    <input v-model="form.mp_status" class="form-control" readonly type="text">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="agent">TKT Status</label>
                                    <input v-model="form.tkt_status" class="form-control" readonly type="text">
                                </div>
                            </div>

                            <div class="search_btn col-md-1">
                                <button class="btn px-3 py-2 btn-success" @click.prevent="addPassport"><i
                                        class="ml-1 fas fa-plus-circle"></i></button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="database__table">
                                <table class="table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Passport No.</th>
                                            <th>Name</th>
                                            <th>Trade</th>
                                            <th>Company Name</th>
                                            <th>STM Satus</th>
                                            <th>Man Power Satus</th>
                                            <th>TKT Satus</th>
                                            <th>Agent/Source</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="passport in passports" :key="passport.passport_no">
                                            <td>{{passport.passport_no}}</td>
                                            <td>{{passport.passenger_name}}</td>
                                            <td>{{passport.trade}}</td>
                                            <td>{{passport.company_name}}</td>
                                            <td>{{passport.stm_status}}</td>
                                            <td>{{passport.mp_status}}</td>
                                            <td>{{passport.tkt_status}}</td>
                                           
                                            <td >
                                                <span v-if="passport.passport_source == 'agent' ">{{passport.agent_name}}</span>
                                                <span v-else>{{passport.passport_source}}</span>
                                            </td>
                                            
                                            <td> 
                                                <button @click="removePassport(passport)"> <i class="fas delete_icon fa-trash-alt"></i></button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button @click.prevent="printPassport" class="btn btn-success">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
         <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
             <button @click="removeData" class="btn bg-light btn-sm">Delete</button>

            </div>
            <!-- Card Body -->
            <div  class="card-body">
                <table class="table table-hover table-bordered dbtable">
                    <thead>
                        <tr>
                            <th>Passport No.</th>
                            <th>Name</th>
                            <th>Trade</th>
                            <th>Company Name</th>
                            <th>STM Satus</th>
                            <th>Man Power Satus</th>
                            <th>TKT Satus</th>
                            <th>Agent/Source</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="passport in passengers" :key="passport.passport_no">
                            <td>{{passport.passport_no}}</td>
                            <td>{{passport.passenger_name}}</td>
                            <td>{{passport.trade}}</td>
                            <td>{{passport.company_name}}</td>
                            <td>{{passport.stm_status}}</td>
                            <td>{{passport.mp_status}}</td>
                            <td>{{passport.tkt_status}}</td>
                            <td >
                                <span v-if="passport.passport_source == 'agent' ">{{passport.agent_name}}</span>
                                <span v-else>{{passport.passport_source}}</span>
                            </td>
                        </tr>

                    </tbody>
                </table>
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
import 'vue-select/dist/vue-select.css';

export default {

     metaInfo: {
      // title will be injected into parent titleTemplate
      title: 'Passengers',
    },
    data : () =>{
        return {
            trades:'',
            passengers:'',
            expassengers:'',
            isShowCard: true,
             searchFrom:{
              passport_no: '',
            },

            form:{
                passenger_name: '',
                passport_no: '',
                trade: '',
                company_name: '',
                agent_name: '',
                passport_source: '',
                stm_status: '',
                mp_status: '',
                tkt_status: '',
            },
            passports: [],
        }
    },

    methods:{

        showCard(){
            this.isShowCard = !this.isShowCard
        },

        searchPassport(){

            axios.post('search-passport-for-print', this.searchFrom).then(res =>{
                
                if(res.data.error_msg){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error_msg
                   });
                }
                
                const passenger = res.data.data;
                this.searchFrom.passport_no = '';
                
                this.form.passenger_name = passenger.passenger_name;
                this.form.passport_no = passenger.passport_no;
                this.form.passport_source = passenger.passport_source;

                this.form.company_name = passenger.company.company_name;
               
                this.form.trade = passenger.trade.trade;

                if(passenger.agent){
                     this.form.agent_name = passenger.agent.agent_name;
                }


                if(passenger.stmpassport){
                   
                    if(passenger.stmpassport.stm_passport_complete_date){
                           this.form.stm_status = 'Complete D : ' + passenger.stmpassport.stm_passport_complete_date;
                    }

                     else{

                       axios.get(`stm/processing-date/${passenger.stmpassport.stm_id}`).then((res)=>{
                            this.form.stm_status = 'Processing D : ' + res.data.date;
                        })
                   }
                }
                 else{
                  this.form.stm_status = 'Pending'
                }

               if(passenger.manpowerpassport){
                   
                    if(passenger.manpowerpassport.man_power_passport_complete_date){
                          this.form.mp_status = 'Complete D : ' +  passenger.manpowerpassport.man_power_passport_complete_date;
                    }
                    else{
                        axios.get(`mp/processing-date/${passenger.manpowerpassport.man_power_id}`).then((res)=>{
                            this.form.mp_status = 'Processing D : ' + res.data.date;
                        })
                    }
                }

                 else{

                     this.form.mp_status = 'Pending'

                }
                

                if(passenger.tktpassport){

                   if(passenger.tktpassport.tkt_passport_complete_date){
                        this.form.tkt_status = 'Complete D : ' +  passenger.tktpassport.tkt_passport_complete_date;
                   }
                   else{
                        axios.get(`tkt/processing-date/${passenger.tktpassport.tkt_id}`).then((res)=>{
                            this.form.tkt_status = 'Processing D : ' + res.data.date;
                        })
                    }
                }
                else{
                    this.form.tkt_status = 'Pending';
                }

            })
        },

        addPassport(){

            const items =  this.passports.filter(a => a.passport_no == this.form.passport_no);
            
            if(!this.form.passport_no){
                 Toast.fire({
                        icon: 'error',
                        title: 'Please add passport'
                });
             }
             else if(items.length){
                  Toast.fire({
                        icon: 'error',
                        title: 'Already added this passport'
                });
             }
             else{

                 this.passports.push(this.form);
                 this.form =  {
                    passenger_name: '',
                    passport_no: '',
                    passport_source: '',
                    agent_name : '',
                    company_name: '',
                    trade: '',
                    tkt_status: '',
                    mp_status: '',
                    mp_status: '',                    
                    passport_source: '',              
                }
                 
             }
        },

        removePassport(item){
            let index =   this.passports.indexOf(item);
              this.passports.splice(index, 1);
        },

        printPassport(){
            localStorage.setItem('printPassports', JSON.stringify(this.passports));
            window.location.reload();
        },

        removeData(){
            localStorage.removeItem('printPassports');
             window.location.reload();
        },

        clrFrom(){
 
            this.form.passenger_name = '';
            this.form.passport_no = '';
            this.form.passport_source = '';

            this.form.agent_name = '';
            this.form.company_name = '';
            
            this.form.trade = '';
            this.form.tkt_status = '';
            this.form.mp_status = '';
            this.form.mp_status = '';
            this.form.passport_source = '';
        },

    },


    mounted() {

         axios.get('trade/lists').then(response =>{
                this.trades = response.data;
              });

        if(JSON.parse(localStorage.getItem('printPassports'))){

            this.passengers = JSON.parse(localStorage.getItem('printPassports'));

            setTimeout(() => {
                    $(".dbtable").DataTable({
                         pagingType: 'full_numbers',
                        pageLength: 10,
                        processing: true,
                         dom: 'Bfrtip',
                        buttons: [
                           'copy', 'csv', 'excel', 'pdf', 'print'
                        ]                          
                    });
                });
 
         
         }

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

.delete_icon{
    color: rgb(238, 12, 12);
}
</style>