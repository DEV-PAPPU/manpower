<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Agent Entry</h6>
                    <router-link :to="{name: 'AgentList'}" class="btn bg-light btn-sm">Back To List</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <form @submit.prevent="addAgent" enctype="multipart/form-data">
                        <fieldset>
                            <legend>Agent Information</legend>
                            <div class="form-group row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Username">Agent Name</label>
                                        <input class="form-control" v-model="form.agent_name" required type="text">
                                        <small v-if="errors.agent_name"
                                            class="form-text text-danger">{{ errors.agent_name[0] }}</small>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="agent_email">Agent Email</label>
                                        <input class="form-control" v-model="form.agent_email" type="agent_email">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Peragent_address">Phone No (Primary)</label>
                                        <input class="form-control" v-model="form.agent_phone" required type="number">
                                    </div>
                                </div>

                               

                            </div>
                            <div class="row">
                                 <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Peragent_address">Whatsapp Number</label>
                                        <input class="form-control" v-model="form.agent_wp_number" type="number">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="Peragent_address">Imo Number</label>
                                        <input class="form-control" v-model="form.agent_imo_number" type="number">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="UserRole">District</label>
                                         <v-select  label="district_name" v-model="form.district_id" placeholder="Select District" :options="districts" />

                                        <small v-if="errors.district_id"
                                            class="form-text text-danger">{{ errors.district_id[0] }}</small>

                                    </div>
                                </div>

                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="Peragent_address">Agent Address (Area)</label>
                                        <input class="form-control" v-model="form.agent_address_area" type="text">
                                    </div>
                                </div>

                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label for="Peragent_address">Agent Address (Office)</label>
                                        <input class="form-control" v-model="form.agent_address_office" type="text">
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="UserStatus">Current Status</label>
                                        <select v-model="form.agent_status" required class="form-control filter-select">
                                            <option value="">-- Select --</option>
                                            <option value="0">Active</option>
                                            <option value="1">In-Active</option>
                                        </select>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <h5 class="mb-3">Reference information</h5>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Username">Name</label>
                                        <input class="form-control" v-model="form.agent_ref_1_name" type="text">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Peragent_address">Phone</label>
                                        <input class="form-control" v-model="form.agent_ref_1_phone" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Peragent_address">Whatsapp Number</label>
                                        <input class="form-control" v-model="form.agent_ref_1_wp_number" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="Peragent_address">Imo Number</label>
                                        <input class="form-control" v-model="form.agent_ref_1_imo_number" type="number">
                                    </div>
                                </div>

                            </div>


                            <div class="form-group row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Username">Name</label> -->
                                        <input class="form-control" v-model="form.agent_ref_2_name" type="text">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Phone No (Primary)</label> -->
                                        <input class="form-control" v-model="form.agent_ref_2_phone" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Whatsapp Number</label> -->
                                        <input class="form-control" v-model="form.agent_ref_2_wp_number" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Imo Number</label> -->
                                        <input class="form-control" v-model="form.agent_ref_2_imo_number" type="number">
                                    </div>
                                </div>

                            </div>

                            <div class="form-group row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Username">Name</label> -->
                                        <input class="form-control" v-model="form.agent_ref_3_name" type="text">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Phone No (Primary)</label> -->
                                        <input class="form-control" v-model="form.agent_ref_3_phone" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Whatsapp Number</label> -->
                                        <input class="form-control" v-model="form.agent_ref_3_wp_number" type="number">
                                    </div>
                                </div>

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <!-- <label for="Peragent_address">Imo Number</label> -->
                                        <input class="form-control" v-model="form.agent_ref_3_imo_number" type="number">
                                    </div>
                                </div>

                            </div>

                            <div class="row">

                                <dic class="col-md-3">
                                    <h5 class="mt-3">Agent Profile image</h5>
                                    <!-- <DropImage v-on:single_image="single_image($event)" /> -->
                                    <input required @change="changeImg" type="file" id="file">
                                </dic>

                                <dic class="col-md-4">
                                    <h5 class="mt-3">Image Preview</h5>
                                    <div class="my-2 Preview">
                                      <img src="" id="uploadPreview"  class="agentImage" required alt="">
                                    </div>
                                </dic>

                                <dic class="col-md-5">
                                    <h5 class="my-3">Agent images</h5>
                                    <DropMultiImages v-on:new_images="new_images($event)" />
                                </dic>

                                
                            </div>

                            <div class="mt-8 form-group row">
                                <div class="col-md-4" style="clear:both;">
                                    <button class="btn btn-success" type="submit">Save Changes</button>
                                    <button class="btn btn-danger" type="reset">Cancel</button>
                                </div>
                            </div>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import 'vue-select/dist/vue-select.css';
import axios from 'axios'
import DropMultiImages from '../../assets/droppable_image/Drop_multiple_images.vue'
// import DropImage from '../../assets/droppable_image/Drop_single_image.vue'
    export default {
        components:{DropMultiImages},
        data: () =>{
            return {
                form:{
                agent_name: '',
                agent_address_area: '',
                agent_address_office: '',
                agent_email: '',
                district_id: '',
                agent_status: '',
                agent_phone: '',
                agent_imo_number: '',
                agent_wp_number: '',
                agent_ref_1_name: '',
                agent_ref_1_phone: '',
                agent_ref_1_imo_number: '',
                agent_ref_1_wp_number: '',
                agent_ref_2_name: '',
                agent_ref_2_phone: '',
                agent_ref_2_imo_number: '',
                agent_ref_2_wp_number: '',
                agent_ref_3_name: '',
                agent_ref_3_phone: '',
                agent_ref_3_imo_number: '',
                agent_ref_3_wp_number: '',
                images: [],
               },
               errors: '',
               districts:[],
               success: 'ok'
            }
        },

        methods:{

            addAgent(){

                 let data = new FormData();
                data.append('agent_name', this.form.agent_name);
                data.append('agent_address_area', this.form.agent_address_area);
                data.append('agent_address_office', this.form.agent_address_office);
                data.append('agent_email', this.form.agent_email);
                data.append('district_id', this.form.district_id.id);
                data.append('agent_status', this.form.agent_status);
                data.append('agent_phone', this.form.agent_phone);
                data.append('agent_imo_number', this.form.agent_imo_number);
                data.append('agent_wp_number', this.form.agent_wp_number);
                data.append('agent_ref_1_name', this.form.agent_ref_1_name);
                data.append('agent_ref_1_phone', this.form.agent_ref_2_phone);
                data.append('agent_ref_1_imo_number', this.form.agent_ref_1_imo_number);
                data.append('agent_ref_1_wp_number', this.form.agent_ref_1_wp_number);
                data.append('agent_ref_2_name', this.form.agent_ref_2_name);
                data.append('agent_ref_2_phone', this.form.agent_ref_2_phone);
                data.append('agent_ref_2_imo_number', this.form.agent_ref_2_imo_number);
                data.append('agent_ref_2_wp_number', this.form.agent_ref_2_wp_number);
                data.append('agent_ref_3_name', this.form.agent_ref_3_name);
                data.append('agent_ref_3_phone', this.form.agent_ref_3_phone);
                data.append('agent_ref_3_imo_number', this.form.agent_ref_3_imo_number);
                data.append('agent_ref_3_wp_number', this.form.agent_ref_3_wp_number);
                data.append('image', document.getElementById('file').files[0])

                for(let i = 0; i < this.form.images.length; i++){

                   let file = this.form.images[i];

                    data.append('files['+ i + ']', file || '');
                }
                 
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

              axios.post('add-agent', data ,config).then(response =>{
               
                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                      this.$router.push({name:'AgentList'});
                }

                this.errors = '';

              })
               .catch(e => {
                     this.errors = e.response.data.errors;
                      alert('Please check all fields')                     
                });
                
            },

            new_images(event){
                this.form.images = event;
            },

            changeImg(e){
            var image = document.getElementById('file');
            let form_img  = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);
            },

            // single_image(event){
            //     // this.form.images = event
            //     console.log('getting  ',event)
            // }

        },

        mounted() {
            axios.get('districts').then(response =>{
                this.districts = response.data;
              })
        }
    }
</script>

<style scoped>
.agentImage{
    width: 250px;
    height: 165px;
    object-fit: cover;
}
</style>
