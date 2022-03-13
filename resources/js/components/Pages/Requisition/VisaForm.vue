<template>
    <div class="mt-3">
        <div class="mt-3">
            <form @submit.prevent="formvisa()">
                <div class="row">
                    <div class="col-md-4 visa_no">
                        <h5 class="my-2">Vasi & Trade Info</h5>
                     <hr>
                        <form>
                            <div class="row">
                                <div class="col-md-5">
                                    <div class="form-group text-sm">
                                        <label for="Username">Visa No</label>
                                        <input class="form-control" v-model="visaForm.visa_no" required type="number">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Username">Qty</label>
                                        <input class="form-control text-sm" v-model="visaForm.visa_qty" required type="number">
                                    </div>
                                </div>

                                <div class="col-md-1">
                                    <div class="visinfo_btn">
                                        <button class="btn btn-success btn-sm" @click.prevent="addVisaNo"><i
                                                class="fas fa-plus-circle"></i></button>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div v-if="visaForm.visaData.length">
                            <p>Visa List</p>
                            <div>
                                <table class="mt-1 table table-hover table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Visa No</th>
                                            <th>Qty</th>
                                            <th style="width:60px">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="visa in visaForm.visaData" :key="visa.visa_no">
                                            <td>{{visa.visa_no}}</td>
                                            <td>{{visa.visa_qty}}</td>
                                            <td style="width:60px">
                                                <a href="#" @click="removeVisa(visa)" class=""><i
                                                        class="fas delete_icon fa-trash-alt">
                                                    </i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>

                    <div class="trade_div col-md-8">
                        <h5 class="my-2">Trade Info</h5>
                        <hr>
                        <div class="row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UserRole">Visa No</label>
                                    <select @change="onChangeVisa" v-model="tradeForm.trade_visa_no" required class="form-control text-sm">
                                        <option value="">-- Select --</option>
                                        <option v-for="item in visaForm.visaData" :key="item.visa_no" :value="item.visa_no">{{item.visa_no}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Trade</label>

                                     <v-select  label="trade_name" v-model="tradeForm.trade" placeholder="Trade" :options="trades" />

                                    <!-- <select v-model="tradeForm.trade" required class="form-control filter-select"
                                        id="UserRole">
                                        <option value="">-- Select --</option>
                                        <option value="helper">Helper</option>
                                        <option value="cleaner">Cleaner</option>
                                    </select> -->
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Username">Qty</label>
                                    <input class="form-control" v-model="tradeForm.trade_qty" required type="number">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Username">Salary</label>
                                    <input class="form-control" v-model="tradeForm.salary" required type="number">
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Username">Price/Reference</label>
                                    <input class="form-control" v-model="tradeForm.price_reference" required
                                        type="number">

                                </div>
                            </div>

                            <div class="col-md-1 act__btn">
                                <div class="visinfo_btn">
                                    <button class="btn btn-success btn-sm" type="submit"><i
                                            class="fas fa-plus-circle"></i></button>

                                    <button class="mt-2 btn btn-danger btn-sm" type="reset"><i
                                            class="fas fa-eraser"></i></button>
                                </div>
                            </div>

                            <div v-if="formData.length > 0" class="mt-3 database__table">
                                <table class="table table-hover table-bordered" id="example">
                                    <thead>
                                        <tr>
                                            <th>Visa No</th>
                                            <th>Trade</th>
                                            <th>Qty</th>
                                            <th>Salary</th>
                                            <th>Price/Ref.</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="item in formData" :key="item.salary">
                                            <td>{{item.trade_visa_no}}</td>
                                            <td>{{item.trade}}</td>
                                            <td>{{item.trade_qty}}</td>
                                            <td>{{item.salary}}</td>
                                            <td>{{item.price_reference}}</td>
                                            <td>
                                                <a href="#" @click="removeTrade(item)" class="btn brn-danger"><i
                                                        class="fas delete_icon fa-trash-alt">
                                                        </i></a>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
            </form>
        </div>

    </div>
</template>

<script>
import 'vue-select/dist/vue-select.css';

    export default {
        data: () =>{
            return {
                visaForm:{
                 visa_no: '',
                 visa_qty: '',
                 visaData: []
                },
               tradeForm:{
                 trade_qty: '',
                 trade: '',
                 salary: '',
                 price_reference: '',
                 trade_visa_no: '',
                },

               formData:[],
               addVisa: false,
               tem_data: [],
               trades: ''
            }
        },

        methods:{
                formvisa(){

                   let visa_form_visa_no = this.visaForm.visaData.find(item => item.visa_no == this.tradeForm.trade_visa_no);

                   let  newData = {
                        trade: this.tradeForm.trade.trade_name,
                        salary: this.tradeForm.salary,
                        price_reference: this.tradeForm.price_reference,
                        trade_qty: this.tradeForm.trade_qty,
                        trade_visa_no: this.tradeForm.trade_visa_no,
                    };  


                    //  checking visa qty  
                    if(visa_form_visa_no.visa_qty < this.tradeForm.trade_qty){
                          console.log('error')

                      }else{
                          this.tem_data.push(newData);
                      }
                   
                     var  totalqty = [];

                     var  visa_qty_added = [];
                    
                     this.tem_data.forEach( item =>{
                    
                                totalqty.push(parseInt(item.trade_qty))
                     })

                    visa_qty_added = totalqty.reduce((a,b) => a + b,0);
                    
                    // end checking

                        console.log('totalqty', totalqty)
                        console.log('tem total visa entry', visa_qty_added)
                        console.log('main qty.', visa_form_visa_no.visa_qty)

                    
                    // insert data base on condition
                    if(visa_form_visa_no.visa_qty < this.tradeForm.trade_qty ){
                      
                       Toast.fire({
                                icon: 'error',
                                title: 'Visa qty over'
                        });
                    }

                    else if(visa_form_visa_no.visa_qty < visa_qty_added){
                        
                        Toast.fire({
                                icon: 'error',
                                title: 'Visa qty over'
                        });

                        let temData = this.tem_data.indexOf(newData);
                        this.tem_data.splice(temData, 1);
                    
                       console.log('total tem_data total  after error visa', this.tem_data)

                    }
                    else{
                        
                        this.formData.push(newData);
                        this.tradeFormClear();

                         let visaTrade = {
                            visa: this.visaForm.visaData,
                            trade: this.formData
                          }

                        this.$emit('formData', visaTrade);
                    }

                   
                },


                removeTrade(trade){
                   
                   
                    let index = this.formData.indexOf(trade);
                    this.formData.splice(index, 1);
                    
                    let visaTrade = {
                        visa: this.visaForm.visaData,
                        trade: this.formData
                    }

                    let temData = this.tem_data.indexOf(trade);
                    this.tem_data.splice(temData, 1);
                   
                   console.log('total tem data   after remove visa', this.tem_data)

                    this.$emit('formData', visaTrade);
                },

                addVisaNo(){

                   var  oldVisa = this.visaForm.visaData.find(item => item.visa_no == this.visaForm.visa_no);

                //    if(this.visaForm.visaData.length){
                //       visa_form_visa_no = this.visaForm.visaData.find(item => item.visa_no == this.tradeForm.trade_visa_no);
                //    }


                    if(!this.visaForm.visa_no){

                        Toast.fire({
                                icon: 'error',
                                title: 'Please Add Visa.'
                       });

                    }

                    else if(!this.visaForm.visa_qty){
                       
                       Toast.fire({
                                icon: 'error',
                                title: 'Visa Qty Missing'
                       });
                    }

                    else if(oldVisa){
                       
                       Toast.fire({
                                icon: 'error',
                                title: 'Visa No. already added'
                       });
                    }

                    else{
                        
                        let  newData = {
                            visa_no: this.visaForm.visa_no,
                            visa_qty: this.visaForm.visa_qty,
                         };

                        this.visaForm.visaData.push(newData);
                        this.visaForm.visa_no = '';
                        this.visaForm.visa_qty = '';
                    
                    }
                },

                removeVisa(visa){
                   let index = this.visaForm.visaData.indexOf(visa);
                   this.visaForm.visaData.splice(index, 1);                     

                },

                onChangeVisa(){
                  this.tem_data = [] ;
                //    Toast.fire({
                //                 icon: 'success',
                //                 title: 'Visa Number Change'
                //     });
                },

                tradeFormClear(){
                    this.tradeForm.trade = '';
                    this.tradeForm.salary = '';
                    this.tradeForm.price_reference = '';
                    // this.tradeForm.trade_qty = '';
                    // this.tradeForm.trade_visa_no = '';

                    // this.tradeForm = {
                    //     trade:'',
                    //     salary: '',
                    //     price_reference: '',
                    //     trade_qty: '',
                    //     trade_visa_no: '',
                    // }
                }

        },

         mounted() {
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

.act__btn{
    margin-top: -15px !important;
}
</style>