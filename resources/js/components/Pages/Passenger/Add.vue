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
                        <form>
                            <div class="form-group row">

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassengerName">Passenger Name </label>
                                        <input v-model="form.passenger_name" class="form-control" required id="PassengerName"
                                            name="PassengerName" placeholder="Please enter PassengerName " tabindex=""
                                            type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="FatherName">Father's Name </label>
                                        <input v-model="form.passenger_father_name" class="form-control" required id="FatherName" name="FatherName"
                                            placeholder="Please enter FatherName " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PhoneNo1">Phone No (Primary)</label>
                                        <input v-model="form.passenger_phone"  class="form-control" required id="PhoneNo1" name="PhoneNo1"
                                            placeholder="Please enter PhoneNo1 " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PerAddress">Gurdian's No </label>
                                        <input class="form-control" required id="EmrgncyPhoneNo"
                                            name="EmrgncyPhoneNo" placeholder="Please enter Gurdian's No " type="text">
                                    </div>
                                </div>
                                
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="DOB">Date of Birth </label>
                                        <input  class="form-control dtpicker" id="DOB" name="DOB"
                                            placeholder="Please enter DOB " tabindex="" type="date" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Passport No </label>
                                        <input  class="form-control" required id="PassportNo" name="PassportNo"
                                            placeholder="Please enter PassportNo " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportExpireDate">Passport Expire Date </label>
                                        <input  class="form-control dtpicker" id="PassportExpireDate"
                                            name="PassportExpireDate" placeholder="Please enter passport expire date"
                                         type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Old Passport No </label>
                                        <input  class="form-control" required id="OldPassportNo"
                                            name="OldPassportNo" placeholder="Please enter OldPassportNo"
                                            type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="Gender">Gender </label>
                                        <select  class="form-control filter-select" id="Gender" required>
                                            <option value="">=== Select ===</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>


                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PerDistrictId">District </label>
                                        <select  class="form-control filter-select" required>
                                            <option value="">=== Select ===</option>
                                            <option v-for="district in districts" :value="district.id"
                                                :key="district.id">{{district.name}}</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportSource">Passport Source</label>

                                        <select  class="form-control filter-select" required id="PassportSource"
                                            name="PassportSource" tabindex="">
                                            <option value="">=== Select ===</option>
                                            <option value="1">Self</option>
                                            <option value="2">Process</option>
                                            <option value="3">Agent</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="AgentId">Agent Name</label>

                                        <select  class="form-control" required>
                                            <option value="">=== Select ===</option>
                                            <option value="none">None</option>
                                            <option v-for="item in agents" :key="item.id" :value="item.id">{{item.agent_name}}</option>
                                        </select>
                                    </div>
                                </div>
                                
                                <div class="col-md-3">
                                    <div class="skin skin-square square-skin">
                                        <label>Is Approved</label>
                                         <select  class="form-control filter-select">
                                            <option value="">=== Select ===</option>
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
                    </form>
                </div>

            </div>
        </div>
    </div>

</template>

<script>
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
                passenger_area: '',
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

        },

        changeImg(){
            var image = document.getElementById('file');
            let form_img  = this.form.passenger_photo = image.files[0];
            var output = document.getElementById('uploadPreview');
            output.src = URL.createObjectURL(form_img);
        }

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