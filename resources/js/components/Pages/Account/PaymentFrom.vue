<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Payment</h6>
                <span @click="fromToggle" class="cursor btn bg-light btn-sm">Toggle Form</span>
            </div>
            <!-- Card Body -->
            <div v-if="isShowfrom" class="card-body">
                <div class="form">
                    <div class="row">

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">Search Passport</label>
                                <input v-model="searchFrom.passport_no" class="form-control" type="text">
                            </div>
                        </div>

                        <div class="search_btn col-md-2">
                            <button class="btn btn-success px-3" @click.prevent="searchPassport">Search</button>
                        </div>

                        <!-- bank form -->
                        <dic v-if="bankfromShow" class="col-md-7">
                            <form @submit.prevent="addBank" class="row">
                                 <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="PassengerName">Bank Name</label>
                                        <input v-model="name" class="form-control" required type="text">
                                    </div>
                               </div>
                                 <div class="form_btn col-md-7">
                                   <button class="btn btn-success" type="submit">Add Bank</button>
                                   <button class="btn btn-danger" @click="closeForm" >Close</button>
                               </div>
                            </form>
                        </dic>

                        <!-- branch from  -->
                        <dic v-if="branchfromShow" class="col-md-7">
                            <form @submit.prevent="addBranch" class="row">
                                 <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="PassengerName">Branch Name</label>
                                        <input v-model="name" class="form-control" required type="text">
                                    </div>
                               </div>
                                 <div class="form_btn col-md-7">
                                   <button class="btn btn-success" type="submit">Add Branch</button>
                                   <button class="btn btn-danger" @click="closeForm" >Close</button>
                               </div>
                            </form>
                        </dic>

                    </div>
                     <form @submit.prevent="payment">
                         <div class="row">
                               <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassengerName">Payment Type</label>
                                        <select v-model="paymentForm.payment_type" required class="form-control">
                                        <option value="">-- Select Type --</option>
                                        <option value="0">Cash</option>
                                        <option value="1">Bank</option>
                                    </select>
                                    </div>
                                </div>
                               <div v-if="paymentForm.payment_type == '1'" class="col-md-2 d-flex gap-2 flex-row align-items-center ">
                                    <div style="width:160px" class="form-group">
                                        <label for="bank">Bank</label>
                                        <v-select  label="bank_name" v-model="paymentForm.bank" placeholder="Select Bank" :options="banks" />
                                    </div>

                                    <i @click="showForm('bank')" class="mt-3 cursor fas fa-plus-circle"></i>

                                </div>
                               <div v-if="paymentForm.payment_type == '1'" class="col-md-2 d-flex gap-2 flex-row align-items-center ">
                                    <div style="width:160px"  class="form-group">
                                        <label for="PassengerName">Branch</label>
                                        <v-select  label="branch_name" v-model="paymentForm.branch" placeholder="Select Branch" :options="branches" />

                                    </div>

                                  <i @click="showForm('branch')" class="mt-3 cursor fas fa-plus-circle"></i>

                                </div>
                               <div v-if="paymentForm.payment_type == '1'" class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassengerName">Check Date</label>
                                        <input v-model="paymentForm.check_date" class="form-control" type="date">
                                    </div>
                                </div>
                               <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="amount">Amount</label>
                                       <input v-model="paymentForm.pay_amount" class="form-control" required type="number">
                                    </div>
                                </div>
                               <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassengerName">Pay Date</label>
                                         <input v-model="paymentForm.pay_date" class="form-control" required type="date">
                                    </div>
                                </div>
                               <div class="form_btn col-md-2">
                                    <button class="btn btn-success" type="submit">Submit</button>
                                    <button class="btn btn-danger" type="reset">Cancel</button>
                                </div>
                         </div>
                     </form>
                    <form>
                        <div class="form-group row">

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
                            <div v-if="form.passport_source == 'self' || form.passport_source == 'proccess' "
                                class="col-md-2">
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';
import axios from 'axios';
export default {
    data : () =>{
        return {
            searchFrom:{
              passport_no: '',
            },
            date : '',
            form:{
                id: '',
                passenger_name: '',
                passport_no: '',
                trade: '',
                company_name: '',
                agent_name: '',
                passport_source: '',
            },
            paymentForm:{
              payment_type: '',
              bank: '',
              branch: '',
              pay_amount: '',
              check_date: '',
              pay_date: '',
              passenger_id: '',
            },
            passports: [],
            isShowfrom: false,
            banks: '',
            branches: '',
            bankfromShow: false,
            branchfromShow: false,
            name: '',
            errors: '',
        }
    },

    methods:{

        searchPassport(){

            axios.post('payment/search/passenger', this.searchFrom).then(res =>{
              
               this.searchFrom.passport_no = '';

                if(!res.data.error_msg){
                   this.form = res.data.passenger;
                   this.paymentForm.passenger_id = res.data.passenger.id
                }

                if(res.data.error_msg){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error_msg
                   });

                   this.form = '';
                }
            })
        },



        payment(){

          const form = {
              payment_type: this.paymentForm.payment_type,
              bank_id: this.paymentForm.bank.id,
              branch_id: this.paymentForm.branch.id,
              pay_amount: this.paymentForm.pay_amount,
              check_date: this.paymentForm.check_date,
              pay_date: this.paymentForm.pay_date,
              passenger_id: this.paymentForm.passenger_id,
            };
            
            // 1 for bank
            if(this.paymentForm.payment_type == '1'){
                 
                 if(!this.paymentForm.bank.id){
                     alert('Please select bank');
                 }
                 else if(!this.paymentForm.branch.id){
                      alert('Please select bank');
                 }
                 else if(!this.paymentForm.check_date){
                      alert('Please select check date');
                 }
                 else{
                      axios.post('payment/passenger',form).then(res =>{
                    
                    if(res.data.msg){

                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                        });
                    }

                    if(!res.data.error_msg){
                        window.location.reload();
                    }

                    if(res.data.error_msg){

                        Toast.fire({
                            icon: 'error',
                            title: res.data.error_msg
                        });
                    }

                })
                .catch(e =>{
                    Toast.fire({
                        icon: 'error',
                        title: 'Something is wrong!'
                  });
                })
                 }
            }
            else{
               axios.post('payment/passenger',form).then(res =>{
                    
                    if(res.data.msg){

                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                        });
                    }

                    if(!res.data.error_msg){
                        window.location.reload();
                    }

                    if(res.data.error_msg){

                        Toast.fire({
                            icon: 'error',
                            title: res.data.error_msg
                        });
                    }

                })
                .catch(e =>{
                    Toast.fire({
                        icon: 'error',
                        title: 'Something is wrong!'
                  });
                })
            }
            
            

        },

        loadBankBranch(){
          
            axios.get("bank/lists").then((res)=>{
                this.banks = res.data;
            })
        
            axios.get("branch/lists").then((res)=>{
                    this.branches = res.data;
            })
        },

        fromToggle(){
            this.isShowfrom = !this.isShowfrom
        },

        closeForm(){
            this.bankfromShow = false;
            this.branchfromShow = false;
            this.name = null;
        },

        showForm(name){
         
          if(name == 'bank'){
             this.branchfromShow = false;
             this.bankfromShow = true;
          }
          else{
              this.bankfromShow = false;
              this.branchfromShow = true;
          }
        },

        addBranch(){

            const data = {
                branch_name: this.name
            };

            axios.post('branch/store', data).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.name = '';

                this.loadBankBranch();
            })
            .catch(e => {
                     this.errors = e.response.data.errors                     
                });

        },

        addBank(){
            const data = {
                bank_name: this.name
            };

             axios.post('bank/add', data).then(response =>{
                     
                    Toast.fire({
                            icon: 'success',
                            title: response.data.msg
                    });

                    this.loadBankBranch();
               })

            .catch(e => {
                     this.errors = e.response.data.errors                     
                });
        },
        resetForm(){
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.paymentForm.payment_type = null;
            // this.closeForm()
            // this.form = null;
        }

    },
    mounted(){
        
        this.loadBankBranch();
        
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

.form_btn{
    margin-top: 32px;
}
</style>