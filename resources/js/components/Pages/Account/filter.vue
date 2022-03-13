<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Payment Filter</h6>
               <div class="d-flex gap-3">
                    <button  @click="reloadPage" class="btn bg-light btn-sm">Refresh</button>
                     <span @click="fromToggle" class="cursor btn bg-light btn-sm">Toggle Form</span>
               </div>

            </div>
            <!-- Card Body -->
            <div v-if="isShowfrom" class="card-body">
                <form @submit.prevent="filterData">
                    <div class="row">
                         <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Company">Company</label>
                                    <v-select label="company_name" v-model="form.company_id" placeholder="-- Select --" :options="company" />
                                </div>
                        </div>

                        <div class="col-md-2">
                                <div class="form-group">
                                    <label for="Company">Visa No. </label>
                                    <div class="d-flex gap-1" >
                                        <input type="text" v-model="form.visa_no" class="form-control">
                                    </div>
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
 
                    <div class="form-group row">
                        <div class="col-md-4" style="clear:both;">
                            <button class="btn btn-success" type="submit">Filter Report</button>
                            <button class="btn btn-danger" type="reset">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import 'vue-select/dist/vue-select.css';

export default {
    data : () =>{
        return {
            form:{
                trade: '',
                company_id: '',
                sector_id: '',
                visa_no: '',
            },
            passengers: '',
            company: '',
            agents: '',
            sectors: '',
            isShowfrom: false,

        }
    },

    methods:{
        filterData(){


               let data = new FormData();
                data.append('trade', this.form.trade);
               
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
   

            axios.post('payment/filter', data).then(res =>{
                
                if(res.data.length){
                  console.log(res.data)
                  this.$emit('filterdata',res.data)
                }

                if(!res.data.length){
                    Toast.fire({
                        icon: 'error',
                        title: 'Data Not found !'
                   });
                }
            })

            
        },

        fromToggle(){
            this.isShowfrom = !this.isShowfrom
        },

 

        reloadPage(){
            window.location.reload()        
            },

            

    },

 

    mounted(){
         axios.get("agents").then(res =>{
           this.agents = res.data
        });


        axios.get("companies").then(res =>{
                this.company = res.data.companies;
        });
        axios.get("sectors").then(res =>{
                this.sectors = res.data;
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