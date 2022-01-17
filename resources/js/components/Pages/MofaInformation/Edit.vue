<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Mofa Edit</h6>
                    <router-link :to="{name: 'MofaInformationlist'}" class="btn btn-success btn-sm">Back To List
                    </router-link>

                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form @submit.prevent="updateMofa">
                        <div class="form-group row">

                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="UserRole">Passenger</label>
                                    <select v-model="form.passenger_id" class="form-control filter-select" required>
                                        <option value="">-- Select passenger --</option>
                                        <option v-for="item in passengers" :key="item.id" :value="item.id">
                                            <p>PP: {{item.passenger_name}} > {{item.agent_name}} </p>
                                        </option>
                                    </select>
                                    <small v-if="errors.passenger_id"
                                        class="form-text text-danger">{{ errors.passenger_id[0] }}</small>

                                </div>
                            </div>

                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="UserRole">Visa & Trade</label>
                                    <select v-model="form.requisition_visainfo_id" class="form-control filter-select" required>
                                        <option value="">-- Select passenger --</option>
                                        <option v-for="item in visa_trades" :key="item.id" :value="item.id">
                                            <p>visa: {{item.visa_no}} > Trade: {{item.trade}} > Salary: {{item.salary}} 
                                                Price: {{item.price_reference}}
                                            </p>
                                        </option>
                                    </select>
                                    <small v-if="errors.passenger_id"
                                        class="form-text text-danger">{{ errors.passenger_id[0] }}</small>

                                </div>
                            </div>


                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="email">Discount</label>
                                    <input class="form-control" v-model="form.discount" type="number">

                                </div>
                            </div>

                            <div class="form-group row">
                                <div class="col-md-4" style="clear:both;">
                                    <button class="btn btn-success" type="submit">Save Changes</button>
                                    <button class="btn btn-danger" type="reset">Cancel</button>
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

import axios from 'axios'
    export default {
        data: () =>{
            return {
                form:{
                    passenger_id: '',
                    requisition_visainfo_id: '',
                    discount: ''
                },
                passengers: [],
                visa_trades: [],
                errors: ''

            }
        },

        methods:{

            updateMofa(){
             let id = this.$route.params.id;
              axios.post(`update-mofaInformation/${id}`, this.form).then(response =>{
               
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
            axios.get("passengers").then(res =>{
                this.passengers = res.data
            })
            axios.get("visa-trades").then(res =>{
                this.visa_trades = res.data
            })

            let id = this.$route.params.id;
            axios.get(`edit-mofaInformation/${id}`).then(res =>{
                this.form = res.data
            });

        }
    }
</script>
