<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">District List</h6>
                     <router-link :to="{name: 'Adddistrict'}" class="btn bg-light btn-sm">Add District</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered" id="example">
                            <thead>
                                <tr>
                                    <th>Ser</th>
                                    <th>District Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="district in districts" :key="district.id">
                                    <td>{{district.id}}</td>
                                    <td>{{district.district_name}}</td>
                                    <td>
                                        <router-link :to="{name: 'district-edit', params: {id: district.id}}"><i class="far edit_icon fa-edit"></i></router-link>
                                        <a href="#" @click="deletedistrict(district.id)" ><i class="fas delete_icon fa-trash-alt"></i></a>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
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
            districts:[]
        }
    },

    methods:{
        loadDistrict(){
            //API Call
            axios
            .get("districts")
            .then((res)=>
            {
                this.districts = res.data;
                setTimeout(() => {
                    $("#example").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                        // "bDestroy": true,                        
                    });
                    });
              })
        },

        deletedistrict(id){
            axios.post(`delete-districts/${id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                this.loadDistrict();
            })
        }

    },

    mounted() {
        this.loadDistrict();
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
</style>