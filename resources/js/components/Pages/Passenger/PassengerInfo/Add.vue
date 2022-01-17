<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Enter Files</h6>
                <router-link :to="{name: 'PassengerList'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                    <div class="row">
                        <div class="col-md-6">
                            <form @submit.prevent="addPassengerImages">
                                <div>
                                    <DropImage v-on:new_images="new_images($event)"/>
                                </div>
                                <div class="mt-5 form-group">
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-success" type="submit">Save Changes</button>
                                        <button @click="removeImg" class="btn btn-danger" type="reset">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-6">
                            <form>
                                
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios';
import DropImage from '../../../assets/droppable_image/Drop_multiple_images.vue'
export default {
    components:{DropImage},
    data : () =>{
        return {
            form:{
                images: []
            },
        }
    },

    methods:{

        addPassengerImages(){
             
                let data = new FormData();
                data.append('passenger_id', this.$route.params.id);
                for(let i = 0; i < this.form.images.length; i++){

                   let file = this.form.images[i];

                    data.append('files['+ i + ']', file || '');
                }

            axios.post('passenger-image', data).then(response =>{
                this.form.images = ''
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });
            })

        },

        removeImg(){
           this.form.images = ''
        },

        new_images(event){
            this.form.images = event
        }

    },

}
</script>