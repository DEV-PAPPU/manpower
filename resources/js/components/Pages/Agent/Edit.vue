<template>
    <div>
        <div class="">
             <div class="card shadow mb-4">
                    <!-- Card Header - Dropdown -->
                    <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-white">AgentEntry</h6>
                        <router-link :to="{name: 'AgentList'}" class="btn bg-light btn-sm">Back To List</router-link>

                    </div>
                    <!-- Card Body -->
                    <div class="card-body">

                        <form @submit.prevent="addAgent" >
                              <div class="form-group row">

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="Username">Agent Name</label>
                                            <input class="form-control" v-model="form.agent_name" required type="text" >
                                            <small v-if="errors.agent_name" class="form-text text-danger">{{ errors.agent_name[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                         <div class="form-group">
                                            <label for="agent_email">Agent Email</label>
                                            <input class="form-control" v-model="form.agent_email" required type="agent_email" >
                                            <small v-if="errors.agent_email" class="form-text text-danger">{{ errors.agent_email[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="Peragent_address">Phone No (Primary)</label>
                                            <input class="form-control" v-model="form.agent_phone" required type="text" >
                                            <small v-if="errors.agent_phone" class="form-text text-danger">{{ errors.agent_phone[0] }}</small>
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="UserRole">District</label>
                                        <select v-model="form.district_id" class="form-control filter-select" id="UserRole">
                                            <option value="">-- Select District --</option>
                                            <option v-for="district in districts" :key="district.id" :value="district.id">{{district.district_name}}</option>
                                        </select>
                                         <small v-if="errors.district_id" class="form-text text-danger">{{ errors.district_id[0] }}</small>
                                        </div>
                                    </div>
                                    <div class="col-md-5">
                                        <div class="form-group">
                                            <label for="Peragent_address">Agent Area</label>
                                            <input class="form-control" v-model="form.agent_area" required type="text" >
                                            <small v-if="errors.agent_area" class="form-text text-danger">{{ errors.agent_area[0] }}</small>

                                        </div>
                                    </div>

                                     <div class="col-md-7">
                                        <div class="form-group">
                                            <label for="Peragent_address">Office  Agent Address</label>
                                            <input class="form-control" v-model="form.agent_address" placeholder="Please enter agent_address" type="text">
                                            <small v-if="errors.agent_address" class="form-text text-danger">{{ errors.agent_address[0] }}</small>

                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="UserStatus">Is Approved</label>
                                        <select v-model="form.agent_is_approved" class="form-control filter-select" id="UserStatus">
                                            <option value="">-- Select Status --</option>
                                            <option value="0">Active</option>
                                            <option value="1">In Active</option>
                                        </select>
                                        </div>
                                    </div>
                                   
                                </div>

                                <div class="form-group row">
                                    <div class="col-md-4" style="clear:both;">
                                        <button class="btn btn-success" type="submit">Save Changes</button>
                                        <button class="btn btn-danger" type="reset">Cancel</button>
                                    </div>
                                </div>
                        </form>
                        
                    </div>
                </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
    export default {
        data: () =>{
            return {
                form:{
                agent_name: '',
                agent_area: '',
                agent_phone: '',
                agent_address: '',
                agent_email: '',
                district_id: '',
                agent_is_approved: ''
               },
               errors: '',
               districts:[],
            }
        },

        methods:{

            UpdateAgent(){
             
              let id = this.$route.params.id;

              axios.post(`update-agent/${id}`, this.form).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            }

        },

        mounted() {

            let id = this.$route.params.id;
            axios.get(`edit-agent/${id}`).then(res =>{
                this.form = res.data
            });

            axios.get('districts').then(response =>{
                this.districts = response.data;
              })
        }
    }
</script>
