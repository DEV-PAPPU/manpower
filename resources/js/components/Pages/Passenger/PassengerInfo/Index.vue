<template>
    <div>
        <!-- Modal -->
        <div class="modal fade" id="modelimage" tabindex="-1" role="dialog"
            aria-labelledby="modelimageTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modelimageTitle">{{modalImage.title}}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div>
                            <img :src="modalImage.image" alt="" width="450px" height="auto" srcset="">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">Passenger Files</h6>
                <div class=" d-flex flex-row align-items-center gap-2 justify-content-between">
                  <router-link :to="{name: 'PassengerList'}" class="btn bg-light btn-sm">Back To List</router-link>
                    <router-link :to="{name: 'AddPassengerFile', params: {id: id}}" class="btn bg-light btn-sm">Add Files</router-link>
                </div>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <div class="database__table">
                    <table class="table table-hover table-bordered dbtable">
                        <thead>
                            <tr>
                                <th>S/L</th>
                                <!-- <th>Date</th> -->
                                <th>Title</th>
                                <th>Image</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in images" :key="item.id">
                                <td>{{item.id}}</td>
                                <!-- <td>{{item.created_at | dateformat(item.created_at)}}</td> -->
                                <td>{{item.title}}</td>
                                <td><img :src="item.image" class="img-fluid border" style="width:100px" alt="" srcset=""> </td>
                                <td>
                                    
                                    <button @click="showImage(item)" data-toggle="modal" data-target="#modelimage"
                                     class="btn btn-success " >View Image </button>
                                    <button @click="deleteImage(item)" class="mx-3 btn btn-success " >Delete Image </button>
                                    <!-- <button @click="downloadImage(item.image)" class="btn btn-success " >Download Image<i class="fas fa-arrow-circle-right px-2"></i></button> -->
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

//Bootstrap and jQuery libraries
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
import axios from 'axios';

export default {
    data : () =>{
        return {
            id: '',
            files: '',
            images: '',
            modalImage: ''
        }
    },

    methods:{
        LoadImg(){
            //API Call
            axios.get(`passenger-image/${this.$route.params.id}`).then((res)=>{
                 this.images = res.data;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                    });
              })
        },

        downloadImage(image){
            alert(image)
        },
        showImage(image){
           this.modalImage = image;
        },

        deleteImage(item){

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

                axios.post(`passenger-image-delete/${item.id}`)
                 window.location.reload();
                   Swal.fire(
                    'Deleted!',
                    'Image Deleted.',
                    'success'
                    )
                }
            })
 
        }
    },

    mounted() {
        this.LoadImg();       
        this.id = this.$route.params.id;
        }
}
</script>

<style scoped>
table.dataTable thead th, table.dataTable thead td {
    font-size: 12px;
    font-weight: 500;
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
</style>