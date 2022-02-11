<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Agent Edit</h6>
                    <router-link :to="{name: 'AgentList'}" class="btn bg-light btn-sm">Back To List</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">

                    <form @submit.prevent="UpdateAgent" enctype="multipart/form-data">
                        <div class="form-group row">
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Username">Agent Name</label>
                                    <input class="form-control" v-model="form.agent_name"  type="text">
                                    <small v-if="errors.agent_name"
                                        class="form-text text-danger">{{ errors.agent_name[0] }}</small>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="agent_email">Agent Email</label>
                                    <input class="form-control" v-model="form.agent_email" type="agent_email">
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Peragent_address">Phone No (Primary)</label>
                                    <input class="form-control" v-model="form.agent_phone"  type="number">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Peragent_address">Whatsapp Number</label>
                                    <input class="form-control" v-model="form.agent_wp_number" type="number">
                                </div>
                            </div>

                        </div>
                        <div class="form-group row">


                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="Peragent_address">Imo Number</label>
                                    <input class="form-control" v-model="form.agent_imo_number" type="number">
                                </div>
                            </div>

                            <div class="col-md-3">
                                <div class="form-group">
                                    <label for="UserRole">District</label>
                                    <select v-model="form.district_id" class="form-control filter-select" >
                                        <option value="">-- Select District --</option>
                                        <option v-for="district in districts" :key="district.id" :value="district.id">
                                            {{district.district_name}}</option>
                                    </select>
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

                            <div class="col-md-7">
                                <div class="form-group">
                                    <label for="Peragent_address">Agent Address (Office)</label>
                                    <input class="form-control" v-model="form.agent_address_office" type="text">
                                </div>
                            </div>

                            <div class="col-md-4">
                                <div class="form-group">
                                    <label for="UserStatus">Current Status</label>
                                    <select v-model="form.agent_status" class="form-control filter-select">
                                        <option value="">-- Select --</option>
                                        <option value="1">Active</option>
                                        <option value="0">In-Active</option>
                                    </select>
                                </div>
                            </div>

                        </div>

                        <div class="form-group row">
                            <h3 class="mb-3">Reference information</h3>
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

                                <dic class="col-md-4">
                                    <h3 class="my-3">Agent Profile image</h3>
                                    <!-- <DropImage v-on:single_image="single_image($event)" /> -->
                                    <input @change="img"  type="file" id="file">
                                </dic>

                            <dic class="col-md-4">
                                  <h3 class="my-3">Agent images</h3>
                                <DropMultiImages v-on:new_images="new_images($event)" />
                            </dic>

                            <dic v-if="images" class="col-md-4">
                                  <div class="d-flex flex-wrap">
                                      <div v-for="image in images" :key="image.id" class="agentimg">
                                          <div class="m-2">  
                                              <i @click="deleteImage(image)" class="del-icon fas fa-times"></i>
                                              <img :src="image.image" class="agent_images" alt="" srcset="">
                                           </div>
                                      </div>
                                  </div>
                            </dic>
                        </div>

                        <div class="mt-5 form-group row">
                            <div class="col-md-4" style="clear:both;">
                                <button class="btn btn-success" type="submit">Save Changes</button>
                                <button @click="resetbtn" class="btn btn-danger" type="reset">Cancel</button>
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
import DropMultiImages from '../../assets/droppable_image/Drop_multiple_images.vue'
    export default {
        components:{DropMultiImages: DropMultiImages},
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
               image: false,
               images: []
            }
        },

        methods:{

            UpdateAgent(){
             
              let id = this.$route.params.id;

                 let data = new FormData();
                data.append('agent_name', this.form.agent_name);
                data.append('agent_address_area', this.form.agent_address_area);
                data.append('agent_address_office', this.form.agent_address_office);
                data.append('agent_email', this.form.agent_email);
                data.append('district_id', this.form.district_id);
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
                 
                 if(this.image)
                 {
                     data.append('image', document.getElementById('file').files[0])
                 }

                if(this.form.images){

                    for(let i = 0; i < this.form.images.length; i++){

                   let file = this.form.images[i];

                    data.append('files['+ i + ']', file || '');
                  }

                }
                 
                const config = {
                    headers: { 'content-type': 'multipart/form-data' }
                }

              axios.post(`update-agent/${id}`,  data ,config).then(response =>{
               
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
                     this.errors = e.response.data.errors                     
                });
            },

             new_images(event){
                this.form.images = event;
            },

             img(event){
                this.image = true;
            },

            resetbtn(){
                this.image = false;
            },

            deleteImage(item){

                 if(window.confirm("Do you really want to delete?")){

                     axios.post(`delete-agent-image/${item.agent_id}`).then(res =>{
                
                    if(res.data.msg){
                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                    });

                    let index = this.images.indexOf(item);
                    this.images.splice(index, 1);

                    }
                    else{
                        alert('Something is wrong reload page and try again')
                    }
              });
                    
                 }
              

            },

        },

        mounted() {

            let id = this.$route.params.id;
            axios.get(`edit-agent/${id}`).then(res =>{
                this.form = res.data.agent
                this.images = res.data.images
            });

            axios.get('districts').then(response =>{
                this.districts = response.data;
              })
        }
    }
</script>

<style scoped>
.agent_images{
    width: 100px;
    height: 70px;
    object-fit: cover;
    border-radius: 10px;
    border: solid rgb(44, 44, 180) 2px;
}

.agentimg{
    position: relative;
}

.del-icon{
    color: red;
    cursor: pointer;
}
</style>
