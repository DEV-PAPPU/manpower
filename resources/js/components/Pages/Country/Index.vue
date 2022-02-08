<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalCenterTitle">All Sectors</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="database__table">
                            <table class="table table-hover table-bordered">
                                <thead>
                                    <tr>
                                        <th>S/L</th>
                                        <th>Sector Name</th>
                                        <!-- <th>Delete</th> -->
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="sector in showSectors" :key="sector.id">
                                        <td>{{sector.id}}</td>
                                        <td>{{sector.sector_name}}</td>
                                       <!-- <td><a href="#" @click="removeSector(sector)"><i
                                                    class="fas delete_icon fa-trash-alt"></i></a></td> -->
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="ml-2 card shadow mb-4 col-md-7 mr-5">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Country List</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th>Country Name</th>
                                    <th>Sectors</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="country in country" :key="country.id">
                                    <td>{{country.id}}</td>
                                    <td>{{country.country_name}}</td>
                                    <td> <button @click="countrysector(country.id)" data-toggle="modal"
                                            data-target="#exampleModalCenter"><i
                                                class="fas fa-band-aid edit_icon"></i></button></td>
                                    <td>
                                        <button @click="edit(country)"><i class="far edit_icon fa-edit"></i></button>
                                        <a href="#" @click="deleteCountry(country)"><i
                                                class="fas delete_icon fa-trash-alt"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="card shadow mb-4 col-md-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Country Form</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <div class="form-group">
                                <label for="PerAddress">Country Name</label>
                                <input class="form-control" v-model="form.country_name" type="text" required>
                                <small v-if="errors.country_name"
                                    class="form-text text-danger">{{ errors.country_name[0] }}</small>
                            </div>

                            <div class="sectors">
                                <div v-if="form.sector.length > 0">
                                    <h3>Sectors</h3>
                                        <div class="mt-1 old_sector">
                                        <div class="d-flex gap-1 flex-wrap ">
                                            <div v-for="sector in form.sector" :key="sector.id">
                                                <p class="d-flex gap-2 align-items-center mr-2">{{sector.sector_name}}
                                                    <span><a href="#" @click="removeSector(sector)"><i
                                                            class="fas sector_del fa-trash-alt"></i></a></span> </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            <div class="form-group">
                                <label for="UserRole">Select Sector</label>

                                 <input class="form-control mb-2" v-model="searchSector" type="text" placeholder="Search sector..." >
                                <div class="form-control filter-select">
                                    
                                    <div v-for="sector in setors" :key="sector.id" :value="sector" required>
                                       
                                        <div @click="addSector(sector)" class="d-flex gap-2 addsector align-items-center mr-2">
                                             <i class="fas fa-plus-circle"></i>
                                            <span>{{sector.sector_name}}</span>
                                         </div>
                                         
                                    </div>
                                </div>

                                <small v-if="errors.sector" class="form-text text-danger">{{ errors.sector[0] }}</small>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="d-flex gap-3" style="clear:both;">
                                <button v-if="isEdit" class="btn btn-success" @click="update">Update</button>
                                <button v-else class="btn btn-success" @click.prevent="addcountry">Save Changes</button>
                                <button class="btn btn-danger" @click.prevent="Cancel" type="reset">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//Bootstrap and jQuery libraries
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

export default {
    data : () =>{
        return {
            form:{
             country_name: '',
             sector: []
            },
            country:[],
            setors: [],
            errors: '',
            isEdit: false,
            country_id:'',
            country_sectors: '',
            newsectors: [],
            searchSector:'',
            showSectors: '',
        }
    },

    methods:{
        loadCountry(){
            //API Call
            axios.get("country")
            .then((res)=>
            {
                this.country = res.data;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 10,
                        // destroy: true,
                        orderCellsTop: true,
                        // "bDestroy": true,                        
                    });
                    });
              })
        },

        addcountry(){

            axios.post('add-country', this.form).then(response =>{
               
               window.location.reload();
               
               if(response.data.msg){
                   Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });
                 this.errors = ''
               }

                this.form.country_name = ''

                axios.get("country").then(res =>{
                     this.country = res.data;
                })
            })
            .catch(e => {
                     this.errors = e.response.data.errors                     
                });

        },

        edit(country){
         this.isEdit = true
         this.country_id = country.id;
         this.form.country_name = country.country_name;
         
         axios.get(`country-sectors/${country.id}`).then(res =>{
                this.form.sector = res.data;
         })

        },

        update(){

            let id = this.country_id;
            this.form.sector = this.newsectors
            
             axios.post(`update-country/${id}`,this.form).then(response =>{
                          window.location.reload();
                        Toast.fire({
                                icon: 'success',
                                title: response.data.msg
                        });

                        this.isEdit = false;
                        this.form.country_name = '';
                        this.form.sector = [];
                        
                        axios.get("country").then(res =>{
                            this.country = res.data;
                        })

                    })

                .catch(e => {
                        this.errors = e.response.data.errors                     
                });


        },

        deleteCountry(country){
            let id = country.id

            Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.isConfirmed) {
             
              let index = this.country.indexOf(country);
              this.country.splice(index, 1);

                axios.post(`delete-country/${id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

              });
              }
            })
    
        },

        countrysector(id){
            axios.get(`country-sectors/${id}`).then(res =>{
                this.showSectors = res.data;
            })
        },

        Cancel(){
           this.isEdit = false;
           this.form.country_name = '';
           this.form.sector = [];
           this.country_sectors = '';
           this.errors = '';

           axios.get("sectors").then((res)=>{
                this.setors = res.data;
            })
        },

        sectorSearch(){
            let name = this.searchSector;

            if(!name){
                axios.get("sectors").then((res)=>{
                this.setors = res.data;
               })
            }

             axios.get(`search-sector/${name}`).then((res)=>{
                this.setors = res.data
              })
        },

        addSector(sector){
            let item = this.form.sector.find(item => item.id == sector.id);
            
            if(item){
                 alert('Already Added')
            }
            else{  
               this.form.sector.push(sector);
               this.newsectors.push(sector);
            }
        },

        removeSector(sector){

             if(window.confirm("Do you really want to delete?")){
                    let index = this.form.sector.indexOf(sector);
                    this.form.sector.splice(index, 1);
                    axios.post(`delete-country-sector/${sector.id}`)
             }
        }
    },

      watch: { 
            'searchSector': {
            handler(newVal, oldVal) {
                this.sectorSearch(newVal);
            },
            deep: true
            }
        },


    mounted() {
        this.loadCountry();
           axios.get("sectors").then((res)=>{
                this.setors = res.data;
            })
        }

}
</script>

<style scoped>
table.dataTable thead th, table.dataTable thead td {
    font-size: 14px;
    color: rgb(43, 43, 43);
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 14;
}

.edit_icon, .delete_icon{
    font-size: 18px;
    padding: 0px 3px;
}

.edit_icon{
    color: rgb(37, 102, 223);
}

.delete_icon{
    color: rgb(238, 12, 12);
}

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}

.card{
    padding: 0px;
}

.filter-select {
    height: 120px;
    overflow-y: scroll;
}

.edit_icon{
    font-size: 18px;
    padding: 0px 3px;
}

.edit_icon{
    color: rgb(37, 102, 223);
}

.sector_del{
    font-size: 12px !important;
    color: rgb(238, 12, 12);
}

.old_sector {
    background: #f6f6f6;
    border: dotted;
    border-radius: 5px;
    padding: 10px;
}
.addsector{
    cursor: pointer;
}
</style>