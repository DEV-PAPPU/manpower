<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">STM Entry</h6>
                <router-link :to="{name: 'STMLIST'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                    <div class="form-group row">
                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">Date</label>
                                <input v-model="date" class="form-control" type="date">
                            </div>
                        </div>

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

                            <div class="search_btn col-md-1">
                                <button class="btn px-3 py-2 btn-success" @click.prevent="addPassport"><i
                                        class="ml-1 fas fa-plus-circle"></i></button>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div v-if="passports" class="database__table">
                                <table class="table table-hover table-bordered" id="example">
                                    <thead>
                                        <tr>
                                            <th>Passport No.</th>
                                            <th>Name</th>
                                            <th>Trade</th>
                                            <th>Company Name</th>
                                            <th>Agent</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="passport in passports" :key="passport.passport_no">
                                            <td>{{passport.passport_no}}</td>
                                            <td>{{passport.passenger_name}}</td>
                                            <td>{{passport.trade}}</td>
                                            <td>{{passport.company_name}}</td>
                                            <td v-if="passport.passport_source == 'self' || passport.passport_source == 'process' ">{{passport.passport_source}}</td>
                                            <td v-else>{{passport.agent_name}}</td>
                                            <td> <button @click="removePassport(passport)" class="btn btn-success btn-sm"
                                                    >Remove</button>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button @click.prevent="submitPassport" class="btn btn-success">Save Changes</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data : () =>{
        return {
            searchFrom:{
              passport_no: '',
            },
            date : '',
            form:{
                passenger_id: '',
                passenger_name: '',
                passport_no: '',
                trade: '',
                company_name: '',
                agent_name: '',
                passport_source: '',
            },
            passports: [],
        }
    },

    methods:{

        searchPassport(){

            axios.post('search-passport', this.searchFrom).then(res =>{
                const passenger = res.data.data;
                this.searchFrom.passport_no = '';

                if(!res.data.error_msg){
                   this.form = passenger;
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
                 this.form = '';
             }
        },

        removePassport(item){
            let index =   this.passports.indexOf(item);
              this.passports.splice(index, 1);
        },

        submitPassport(){

            if(!this.date){
               Toast.fire({
                        icon: 'error',
                        title: 'Please Select Date'
                });
            }
            else if(!this.passports.length){
                Toast.fire({
                        icon: 'error',
                        title: 'Please Add Passenger'
                });
            }
            else{
                axios.post('add-stm-passport',{
                    date : this.date,
                    passport : this.passports
                }).then(res =>{
                    
                    if(res.data.msg){

                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                        });

                        this.$router.push({name:'STMLIST'});
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

    },

    watch: { 
    // 'form.passport_no': {
    //   handler(newVal, oldVal) {
    //       this.searchPassport(newVal);
    //   },
    //   deep: true
    // }

    },

    mounted(){

        let today = new Date().toLocaleDateString();
        this.form.date = today
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