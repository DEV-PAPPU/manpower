<template>
    <div class="mt-3">
        <div class="mt-3">
            <h5 class="my-2">Vasi & Trade Info</h5>
            <form @submit.prevent="formvisa()">
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
                            <input class="form-control" v-model="visaForm.visa_qty" required type="number">
                        </div>
                    </div>

                    <div class="col-md-2">
                        <div class="form-group">
                            <label for="UserRole">Trade</label>
                            <select v-model="visaForm.trade" required class="form-control filter-select" id="UserRole">
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
                            <button class="btn btn-success btn-sm" type="submit"><i
                                    class="fas fa-plus-circle"></i></button>

                            <button class="btn btn-danger btn-sm" type="reset"><i class="fas fa-eraser"></i></button>
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
</template>
<script>

    export default {
        data: () =>{
            return {
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
                    this.$emit('formData', this.visaFormdata);

                },


                removeVisa(visa){
                    // let data = this.visaFormdata.filter(item => item.visa_no !== visa.visa_no);
                    let index = this.visaFormdata.indexOf(visa);
                    this.visaFormdata.splice(index, 1);
                    this.$emit('formData', this.visaFormdata)
                }

        },

        computed:{

  
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