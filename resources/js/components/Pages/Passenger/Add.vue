<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Entry</h6>
                 <router-link :to="{name: 'PassengerList'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                        <form @submit.prevent="addPassenger">
                            <div class="form-group row">

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassengerName">Passenger Name </label>
                                        <input v-model="form.passenger_name" class="form-control" required type="text">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="FatherName">Father's Name </label>
                                        <input v-model="form.passenger_father_name" class="form-control" required  type="text">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PhoneNo1">Phone No (Primary)</label>
                                        <input v-model="form.passenger_phone" class="form-control" required type="number">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PerAddress">Gurdian's No </label>
                                        <input v-model="form.passenger_gurdian_no" class="form-control"  type="number">
                                    </div>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="DOB">Date of Birth </label>
                                        <input v-model="form.passenger_date_of_birth" required class="form-control dtpicker" type="date">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassportNo">Passport No </label>
                                        <input v-model="form.passport_no" class="form-control" required type="text">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassportExpireDate">Passport Expire Date </label>
                                        <input v-model="form.passport_expire_date" class="form-control dtpicker" required type="date">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassportNo">Old Passport No </label>
                                        <input v-model="form.old_passport_no" class="form-control" type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                 <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Gender">Gender </label>
                                        <select v-model="form.passenger_gender" class="form-control filter-select" required >
                                            <option value="">-- Select --</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>


                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PerDistrictId">District </label>
                                         <v-select  label="district_name" v-model="form.district_id" placeholder="Select" :options="districts" />
                                    </div>
                                </div>

                                 <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportSource">Passport Source</label>

                                        <select v-model="form.passport_source"  class="form-control filter-select" required>
                                            <option value="">-- Select --</option>
                                            <option value="self">Self</option>
                                            <option value="process">Process</option>
                                            <option value="agent">Agent</option>
                                        </select>
                                    </div>
                                </div>
                                <div v-if="form.passport_source == 'agent'" class="col-md-2">
                                    <div class="form-group">
                                        <label for="AgentId">Agent Name</label>
                                         <v-select  label="agent_name" v-model="form.agent_id" placeholder="Select" :options="agents" />
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label id="PhotoPathLabel" for="PhotoPath">Photo</label><br>
                                        <input style="width: 103px" @change="changeImg" required type="file" id="file">
                                    </div>
                                </div>
                                

                            </div>

                            <div class="row">
                                <div class="col-md-3">
                                    <label for="sector">Image Preview</label>
                                    <div class="Preview">
                                            <img src="" id="uploadPreview" class="passengerimage" alt="">
                                    </div>
                                </div>

                                 <div class="col-md-9">
                                <div class="form-group">
                                    <label for="sector">Note</label>
                                    <textarea name="" v-model="form.note" class="form-control" id="" cols="30" rows="7"></textarea>
                                </div>
                            </div>

                            </div>

                             <div class="form-group row">
                                 <h5 class="my-3">Mofa Info</h5>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Company">Company</label>
                                    <v-select label="company_name" v-model="form.company_id" placeholder="-- Select company --" :options="companies" />
                                </div>
                            </div>

                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="sector">Sector</label>
                                    <v-select label="sector_name" v-model="form.sector_id" placeholder="Select" :options="sectors" />
                                </div>
                            </div>

                            <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="UserRole">Visa & Trade</label>
                                        <select v-model="form.trade_id" class="form-control filter-select" required>
                                            <option value="">-- Select trade --</option>
                                            <option v-for="item in trades" :key="item.id" :value="item.id">
                                                <p>Visa No: {{item.trade_visa_no}} - Trade: {{item.trade}}
                                                    - Ref: {{item.price_reference}}
                                                </p>
                                                <!-- <p>Visa No: {{item.trade_visa_no}} > Trade: {{item.trade}} > Salary:
                                                    {{item.salary}}
                                                    > Price: {{item.price_reference}}
                                                </p> -->
                                            </option>
                                        </select>
                                    </div>
                                </div>


                            <div class="col-md-2">
                                <div class="form-group">
                                    <label for="email">Discount</label>
                                    <input class="form-control" v-model="form.discount" type="number">

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
import 'vue-select/dist/vue-select.css';

import axios from 'axios';
export default {
    data : () =>{
        return {
            form:{
                passenger_name: '',
                passenger_father_name: '',
                passenger_phone: '',
                passenger_gurdian_no: '',
                passenger_date_of_birth: '',
                passport_no: '',
                passport_source: '',
                passport_expire_date: '',
                old_passport_no: '',
                passenger_gender: '',
                district_id: '',
                agent_id: '',
                passenger_photo: '',
                company_id: '',
                sector_id: '',
                trade_id: '',
                note: '',
                discount: 0,
            },
            agents: '',
            companies: '',
            districts:[],
            sectors: [],
            trades: [],
            image: false,

        }
    },

    methods:{

        addPassenger(){
             
                let data = new FormData();
                data.append('passenger_name', this.form.passenger_name);
                data.append('passenger_father_name', this.form.passenger_father_name);
                data.append('passenger_phone', this.form.passenger_phone);
                data.append('passport_no', this.form.passport_no);
                data.append('passport_source', this.form.passport_source);
                data.append('passenger_gurdian_no', this.form.passenger_gurdian_no);
                data.append('passenger_date_of_birth', this.form.passenger_date_of_birth);
                data.append('passport_expire_date', this.form.passport_expire_date);
                data.append('old_passport_no', this.form.old_passport_no);
                data.append('passenger_gender', this.form.passenger_gender);
                data.append('district_id', this.form.district_id.id);
                data.append('agent_id', this.form.agent_id.id);
                data.append('discount', this.form.discount);
                data.append('sector_id', this.form.sector_id.id);
                data.append('trade_id', this.form.trade_id);
                data.append('company_id', this.form.company_id.id);
                data.append('note', this.form.note);
                data.append('passenger_photo', document.getElementById('file').files[0])

            axios.post('add-passenger', data).then(response =>{

                if(response.data.error_msg){

                    Toast.fire({
                        icon: 'error',
                        title: response.data.error_msg
                     });
                   
                }

                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                      this.$router.push({name:'PassengerList'});
                }
                
            })
            .catch(e =>{
                alert('Please check all fields')
            })

        },

        changeImg(e){
            var image = document.getElementById('file');
            // this.form.passenger_photo = image.files[0];
            let form_img  = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);
        },

        changeCompany(){
               
               let id = this.form.company_id.id

                axios.get(`search-sector-trade-by-company/${id}`).then(res =>{
                   this.trades = res.data.trade;
                   this.sectors = res.data.sectors;
                   if(res.data.msg){

                        Toast.fire({
                        icon: 'error',
                        title: res.data.msg
                        });
                    }
                })
            }
        // changeImg(e){
        //     var image = document.getElementById('file');
        //     this.form.passenger_photo = image.files[0];
        //     let form_img  = image.files[0];
        //     var output = document.getElementById('uploadPreview');
        //     output.src = URL.createObjectURL(form_img);
        // }

    },

        watch: { 
         'form.company_id.id': {
            handler(newVal, oldVal) {
                this.changeCompany();
             },
            deep: true
            }
       },

    mounted(){
        axios.get("agents").then(res =>{
           this.agents = res.data
        });
        axios.get("districts").then(res =>{
           this.districts = res.data
        });

        axios.get("companies").then(res =>{
                this.companies = res.data.companies;
        });
    }
}
</script>

<style scoped>
.passengerimage{
    width: 230px;
    height: 170px;
    object-fit: cover;
}
</style>