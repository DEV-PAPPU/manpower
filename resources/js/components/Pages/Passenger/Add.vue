<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Enter</h6>
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
                                        <input v-model="form.passenger_phone" class="form-control" type="number">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PerAddress">Gurdian's No </label>
                                        <input v-model="form.passenger_gurdian_no" class="form-control" required  type="text">
                                    </div>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="DOB">Date of Birth </label>
                                        <input v-model="form.passenger_date_of_birth"  class="form-control dtpicker" type="date">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Passport No </label>
                                        <input v-model="form.passport_no" class="form-control" required type="number">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportExpireDate">Passport Expire Date </label>
                                        <input v-model="form.passport_expire_date" class="form-control dtpicker" type="date">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Old Passport No </label>
                                        <input v-model="form.old_passport_no" class="form-control" required type="text">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="Gender">Gender </label>
                                        <select v-model="form.passenger_gender" class="form-control filter-select" required>
                                            <option value="">-- Select --</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>


                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PerDistrictId">District </label>
                                        <select v-model="form.district_id" class="form-control filter-select" required>
                                            <option value="">-- Select --</option>
                                            <option v-for="district in districts" :value="district.id"
                                                :key="district.id">{{district.district_name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportSource">Passport Source</label>

                                        <select v-model="form.passport_source"  class="form-control filter-select" required>
                                            <option value="">=== Select ===</option>
                                            <option value="self">Self</option>
                                            <option value="process">Process</option>
                                            <option value="agent">Agent</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="AgentId">Agent Name</label>

                                        <select v-model="form.agent_id"  class="form-control" required>
                                            <option value="">-- Select --</option>
                                            <option value="none">None</option>
                                            <option v-for="item in agents" :key="item.id" :value="item.id">{{item.agent_name}}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="skin skin-square square-skin">
                                        <label>Is Approved</label>
                                         <select v-model="form.is_approved" class="form-control filter-select">
                                            <option value="">-- Select --</option>
                                            <option value="0">Approved</option>
                                            <option value="1">Pending</option>
                                        </select>

                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label id="PhotoPathLabel" for="PhotoPath">Photo</label><br>
                                        <input style="width: 103px" @change="changeImg" required type="file" id="file">
                                        
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="Preview">
                                            <img src="" id="uploadPreview" class="image" alt="">
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
                is_approved: '',
                district_id: '',
                agent_id: '',
                passenger_photo: '',
            },
            agents: [],
            districts:[
                
            ]


        }
    },

    methods:{

        addPassenger(){
             
                // let data = new FormData();
                // data.append('passenger_name', this.form.passenger_name);
                // data.append('passenger_photo', document.getElementById('file').files[0])

            axios.post('add-passenger', this.form).then(response =>{
                console.log(response)
            })

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
        // changeImg(e){
        //     var image = document.getElementById('file');
        //     this.form.passenger_photo = image.files[0];
        //     let form_img  = image.files[0];
        //     var output = document.getElementById('uploadPreview');
        //     output.src = URL.createObjectURL(form_img);
        // }

    },

    mounted(){
        axios.get("agents").then(res =>{
           this.agents = res.data
        });
        axios.get("districts").then(res =>{
           this.districts = res.data
        });
    }
}
</script>