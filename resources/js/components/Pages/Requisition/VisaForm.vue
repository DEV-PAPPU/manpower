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
                            <p>Visa List () {{visaTotalQty}}</p>
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
                                    <select v-model="tradeForm.trade_visa_no" required class="form-control text-sm">
                                        <option value="">-- Select --</option>
                                        <option v-for="item in visaForm.visaData" :key="item.visa_no" :value="item.visa_no">{{item.visa_no}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="UserRole">Trade</label>
                                    <select v-model="tradeForm.trade" required class="form-control filter-select"
                                        id="UserRole">
                                        <option value="">-- Select --</option>
                                        <option value="helper">Helper</option>
                                        <option value="cleaner">Cleaner</option>
                                    </select>
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

                            <div class="col-md-2">
                                <div class="visinfo_btn">
                                    <button class="btn btn-success btn-sm" type="submit"><i
                                            class="fas fa-plus-circle"></i></button>

                                    <button class="btn btn-danger btn-sm" type="reset"><i
                                            class="fas fa-eraser"></i></button>
                                </div>
                            </div>

                            <div v-if="formData.length > 0" class="database__table">
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
                                                        Remove</i></a>
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

               formData:[]
            }
        },

        methods:{
                formvisa(){

                   let  newData = {
                        trade: this.tradeForm.trade,
                        salary: this.tradeForm.salary,
                        price_reference: this.tradeForm.price_reference,
                        trade_qty: this.tradeForm.trade_qty,
                        trade_visa_no: this.tradeForm.trade_visa_no,
                    };

                    this.formData.push(newData);

                    let visaTrade = {
                        visa: this.visaForm.visaData,
                        trade: this.formData
                    }

                    this.$emit('formData', visaTrade);

                },


                removeTrade(trade){
                    // let data = this.formData.filter(item => item.visa_no !== visa.visa_no);
                    let index = this.formData.indexOf(trade);
                    this.formData.splice(index, 1);
                    
                    let visaTrade = {
                        visa: this.visaForm.visaData,
                        trade: this.formData
                    }

                    this.$emit('formData', visaTrade);
                },

                addVisaNo(){

                    if(!this.visaForm.visa_no){

                        alert('Form can`t be empty!')
                        
                    }
                    else{
                        
                        let  newData = {
                        visa_no: this.visaForm.visa_no,
                        visa_qty: this.visaForm.visa_qty,
                         };

                    this.visaForm.visaData.push(newData);
                    
                    }
                },

                removeVisa(visa){
                   let index = this.visaForm.visaData.indexOf(visa);
                   this.visaForm.visaData.splice(index, 1);                     

                }

        },

        computed:{

           visaTotalQty(){
               return this.visaForm.visaData.reduce((a, b) => (a.visa_qty + b.visa_qty));
           }
  
        },

        mounted() {

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