<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Interview Edit</h6>
                <router-link :to="{name: 'PassportList'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                    <form  @submit.prevent="UpdatetInterview">
                        <div class="form-group row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Video</label>
                                    <select v-model="form.video_passenger" class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                             <div class="col-md-4">
                                <div class="form-group">
                                    <label for="trade">PC Date</label>
                                    <input v-model="form.pc_date" class="form-control" type="date">
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="trade">TC RCV Date</label>
                                    <input v-model="form.tc_rcv_date" class="form-control" type="date">
                                </div>
                            </div>

                        </div>

                        <div class="row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">Medical</label>
                                    <select v-model="form.medical_result" class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="0">Gone</option>
                                        <option value="1">Fit</option>
                                    </select>
                                </div>
                            </div>

                            <div v-if="form.medical_result == '0'" class="col-md-3">
                                <div class="form-group">
                                    <label for="trade">Gone Date</label>
                                    <input v-model="form.medical_gone_date" class="form-control" type="date">
                                </div>
                            </div>

<!-- 
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="name">Interview Satus</label>
                                    <select v-model="form.interview_status" required class="form-control filter-select">
                                        <option value="">-- Select One --</option>
                                        <option value="0">No</option>
                                        <option value="1">Complete</option>
                                    </select>
                                </div>
                            </div> -->
                        </div>

                          

                        <div class="form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button class="btn btn-success mr-3" type="submit">Save Changes</button>
                                <button class="btn btn-danger" type="reset">Cancle</button>
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
            form:{
                medical_result: '',
                medical_gone_date: '',
                video_passenger: '',
                pc_date: '',
                passenger_id: '',
                tc_rcv_date: '',
                // interview_status: ''
            },
        }
    },

    methods:{

       UpdatetInterview(){

           let id = this.$route.params.id;

           axios.post(`interview/update/${id}`, this.form).then(res =>{
               
               if(res.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                     });
                      this.$router.push({name:'PassportList'});
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

     mounted() {

            let id = this.$route.params.id;
           
            axios.get(`interview/edit/${id}`).then(res =>{
                this.form = res.data
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