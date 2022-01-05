<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Enter</h6>
                <div class="dropdown no-arrow">
                    <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div class="dropdown-header">Dropdown Header:</div>
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">

                <div class="form">
                    <form class="user" _lpchecked="1">

                        <form>
                            <div class="form-group row">

                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="PassengerName">Passenger Name </label>
                                        <input autocomplete="on" class="form-control" id="PassengerName"
                                            name="PassengerName" placeholder="Please enter PassengerName " tabindex=""
                                            type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label for="FatherName">Father's Name </label>
                                        <input autocomplete="on" class="form-control" id="FatherName" name="FatherName"
                                            placeholder="Please enter FatherName " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PhoneNo1">Phone No (Primary)</label>
                                        <input autocomplete="on" class="form-control" id="PhoneNo1" name="PhoneNo1"
                                            placeholder="Please enter PhoneNo1 " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PerAddress">Gurdian's No </label>
                                        <input autocomplete="on" class="form-control" id="EmrgncyPhoneNo"
                                            name="EmrgncyPhoneNo" placeholder="Please enter Gurdian's No " tabindex=""
                                            type="text" value="">
                                    </div>
                                </div>

                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label id="PhotoPathLabel" for="PhotoPath">Photo</label>

                                        <div id="uploadPreview" class="uploadPreview"></div>

                                        <input tabindex="11" style="width: 105px" type="file" value="Browse"
                                            id="PhotoPath" name="PhotoPath" multiple="">

                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="DOB">Date of Birth </label>
                                        <input autocomplete="on" class="form-control dtpicker" id="DOB" name="DOB"
                                            placeholder="Please enter DOB " tabindex="" type="date" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Passport No </label>
                                        <input autocomplete="on" class="form-control" id="PassportNo" name="PassportNo"
                                            placeholder="Please enter PassportNo " tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportExpireDate">Passport Expire Date </label>
                                        <input autocomplete="on" class="form-control dtpicker" id="PassportExpireDate"
                                            name="PassportExpireDate" placeholder="Please enter PassportExpireDate "
                                            tabindex="" type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PassportNo">Old Passport No </label>
                                        <input autocomplete="on" class="form-control" id="OldPassportNo"
                                            name="OldPassportNo" placeholder="Please enter OldPassportNo " tabindex=""
                                            type="text" value="">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="Gender">Gender </label>
                                        <select autocomplete="on" class="form-control filter-select" id="Gender"
                                            name="Gender" tabindex="">
                                            <option value="">=== Select ===</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                        </select>


                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label for="PerDistrictId">District </label>
                                        <select autocomplete="on" class="form-control filter-select" id="PerDistrictId"
                                            name="PerDistrictId" tabindex="">
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

                                        <select autocomplete="on" class="form-control filter-select" id="PassportSource"
                                            name="PassportSource" tabindex="">
                                            <option value="">=== Select ===</option>
                                            <option value="1">Self</option>
                                            <option value="2">Process</option>
                                            <option value="3">Agent</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="AgentId">Agent Name</label>

                                        <select autocomplete="on" class="form-control filter-select" id="AgentId"
                                            name="AgentId" tabindex="">
                                            <option value="">=== Select ===</option>
                                            <option value="1">Test Agent</option>
                                            <option value="2">Arif</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="skin skin-square square-skin" style="margin-top: 30px;">


                                        <label style="display: inline-block; width: 32%;">
                                            <div class="icheckbox_square-green" style="position: relative;"><input
                                                    class="icheckbox_square-green" id="IsApproved" name="IsApproved"
                                                    tabindex="" type="checkbox" value="true"
                                                    style="position: absolute; opacity: 0;"><ins class="iCheck-helper"
                                                    style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255); border: 0px; opacity: 0;"></ins>
                                            </div><input name="IsApproved" type="hidden" value="false">
                                            Is Approved
                                        </label>

                                    </div>
                                </div>
                            </div>



                            <div class="form-group row">

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
            },

            districts:[
                {
                    id: 1,
                    name: 'Dhaka'
                },
                {
                    id: 2,
                    name: 'Chandpur'
                }
            ]


        }
    }
}
</script>