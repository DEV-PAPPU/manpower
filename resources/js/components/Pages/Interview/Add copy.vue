<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Interview Enter</h6>
                <router-link :to="{name: 'PassportList'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                    <div class="form-group row">

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="PassengerName">Search Passoort</label>
                                <input v-model="searchFrom.passport_no" class="form-control" type="text">
                            </div>
                        </div>

                        <div class="search_btn col-md-2">
                            <button class="btn btn-success px-3" @click.prevent="searchPassport">Search<i
                                    class="mx-2 fas fa-plus-circle"></i></button>
                        </div>

                        <div class="col-md-3">
                            <div class="form-group">
                                <label for="DOB">Passport No.</label>
                                <input v-model="passenger.passport_no" class="form-control" readonly type="text">
                            </div>
                        </div>

                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input v-model="passenger.passenger_name" class="form-control" readonly type="text">
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="form-group">
                                <label for="name">Phone No.</label>
                                <input v-model="passenger.passenger_phone" class="form-control" readonly type="text">
                            </div>
                        </div>
                    </div>

                    <form>
                        <div class="form-group row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Video</label>
                                    <div>
                                        <input type="radio" id="yes" v-model="form.video" name="video" value="0">
                                        <label for="yes">Yes</label>
                                        <input type="radio" id="no" v-model="form.video" name="video" value="1">
                                        <label for="no">No</label>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Medical</label>
                                    <select v-model="form.medical" class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="0">Gone</option>
                                        <option value="1">Fit</option>
                                    </select>
                                </div>
                            </div>

                            <div v-if="form.medical == '0'" class="col-md-3">
                                <div class="form-group">
                                    <label for="trade">Gone Date</label>
                                    <input v-model="form.gone_date" class="form-control" type="date">
                                </div>
                            </div>

                        </div>

                        <div class="form-group row">
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="trade">PC Date</label>
                                    <input v-model="form.pc_date" class="form-control" type="date">
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="trade">TC RCV Date</label>
                                    <input v-model="form.tc_rcv_date" class="form-control" type="date">
                                </div>
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
                medical: '',
                gone_date: '',
                video: '',
                pc_date: '',
                passenger_id: '',
                passenger_name: '',
                passport_no: '',
                company_name: '',
                tc_rcv_date: '',
                tkt_date: '',
                fly: '',
                passport_source: '',
            },
            passenger:{
                passport_no: "",
                passenger_name: "",
                passenger_phone: "",
            },
        }
    },

    methods:{

        searchPassport(){

            axios.post('interview/search-passenger', this.searchFrom).then(res =>{
                
                this.passenger = res.data.passenger;

                if(res.data.msg){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.msg
                   });
                }
                
            })
        },

       submitPassport(){

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