<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">RequisitionList List</h6>
                    <router-link :to="{name: 'addRequisition'}" class="btn bg-light btn-sm">Add Requisition</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered" id="example">
                            <thead>
                                <tr>
                                    <th>Ser</th>
                                    <th>Agent Name</th>
                                    <th>Address</th>
                                    <th>Email & Mobile</th>
                                    <th>District</th>
                                    <th>Area</th>
                                    <th>Is Approved</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in agents" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.agent_name}}</td>
                                    <td>{{item.agent_address}}</td>
                                    <td>{{item.agent_email}} <br> {{item.agent_phone}}</td>
                                    <td>{{item.district.district_name}}</td>
                                    <td>{{item.agent_area}}</td>
                                    <td>
                                        <i v-if="item.agent_is_approved == 0" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'AgentEdit', params: {id: item.id}}"><i class="far edit_icon fa-edit"></i></router-link>
                                        <a href="#" @click="deleteAgent(item.id)" ><i class="fas delete_icon fa-trash-alt"></i></a>
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
            form:{
            },
            agents:[]
        }
    },

    methods:{
        loadagents(){
            //API Call
            axios.get("agents").then((res)=>{
                this.agents = res.data;
                setTimeout(() => {
                    $("#example").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                    });
              })
        },

        deleteAgent(id){
            axios.post(`delete-agent/${id}`).then(res =>{
                Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                this.loadagents();
            })
        }
    },

    mounted() {
        this.loadagents();
            console.log('Component mounted.')
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