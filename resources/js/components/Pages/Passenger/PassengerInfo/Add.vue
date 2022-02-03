<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Entry Files</h6>
                <router-link :to="{name: 'PassengerList'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="form">
                    <form @submit.prevent="addPassengerImages">
                        <div class="row">
                            <div class="col-md-5">
                                <div class="form-group">
                                    <label for="DOB">Image Title</label>
                                    <input v-model="form.title" class="form-control" required type="text">
                                </div>

                                <div class="mt-5 form-group">
                                    <div class="d-flex gap-2">
                                        <button class="btn btn-success" type="submit">Save Changes</button>
                                        <button @click="removeImg" class="btn btn-danger" type="reset">Cancel</button>
                                    </div>
                                </div>
                            </div>
                             <div class="col-md-3">
                                    <div class="form-group">
                                        <label id="PhotoPathLabel" for="PhotoPath">Photo</label><br>
                                        <input  @change="change" required type="file" id="file">
                                        
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="Preview">
                                            <img src="" id="uploadPreview" class="image" alt="">
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
import axios from 'axios';
export default {
    data : () =>{
        return {
            form:{
                title: '',
                image: ''
            },
            isImage: false
        }
    },

    methods:{

        addPassengerImages(){
             
                let data = new FormData();
                data.append('title', this.form.title);
                data.append('passenger_id', this.$route.params.id);
                data.append('image', document.getElementById('file').files[0])
 
            axios.post('passenger-image', data).then(response =>{
                this.form.image = ''
                
                if(response.data.msg){

                    Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                     });

                    this.$router.push({name:'PassengerList'});
                }
            })

        },

        removeImg(){
           this.form.image = ''
        },

        change(e){
            var image = document.getElementById('file');
            this.form.image = image.files[0];
            let form_img  = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);
        },

        changeImg(e){
            var image = document.getElementById('file');
            // this.form.passenger_photo = image.files[0];
            let form_img  = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);

            let file = e.target.files[0];
                let reader = new FileReader();  

                if(file['size'] < 2111775)
                {
                    reader.onloadend = (file) => {
                    //console.log('RESULT', reader.result)
                     this.form.passenger_photo = reader.result;
                    }              
                     reader.readAsDataURL(file);
                }else{
                    alert('File size can not be bigger than 2 MB')
                }
        }

    },

    mounted() {
        this.form.passenger_id = this.$route.params.id;
        }

}
</script>

<style scoped>
.image{
    width: 260px;
    height: 200px;
    object-fit: cover;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border: dotted green 3px;
    border-radius: 7px;
}
</style>