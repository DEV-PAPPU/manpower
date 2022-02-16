<template>
    <div>
        <div class="">
            <div class="card shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Agent List</h6>
                    <router-link :to="{name: 'AgentEntry'}" class="btn bg-light btn-sm">Add Agent</router-link>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th style="width:100px">Agent Name</th>
                                    <th style="width:100px">Phone</th>
                                    <th style="width:100px">Wp Number</th>
                                    <th style="width:100px">Ref Name</th>
                                    <th style="width:100px">Ref Phone</th>
                                    <th style="width:100px">Ref Wp</th>
                                    <th style="width:100px">Ref Imo</th>
                                    <th style="width:50px">Status</th>
                                    <th style="width:80px">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in agents" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.agent_name}}</td>
                                    <td>{{item.agent_phone}}</td>
                                    <td>{{item.agent_wp_number}}</td>
                                    <td class="ref_td">{{item.agent_ref_1_name}}</td>
                                    <td class="ref_td">{{item.agent_ref_1_phone}}</td>
                                    <td class="ref_td">{{item.agent_ref_1_imo_number}}</td>
                                    <td class="ref_td">{{item.agent_ref_1_wp_number}}</td>
                                    <td>
                                        <i v-if="item.agent_status == '0'" class="fa fa-check Yes"></i>
                                        <i v-else class="fas fa-times"></i>
                                    </td>
                                    <td>
                                        <router-link :to="{name: 'AgentEdit', params: {id: item.id}}"><i class="far edit_icon fa-edit"></i></router-link>
                                        <a href="#" @click="deleteAgent(item)" ><i class="fas delete_icon fa-trash-alt"></i></a>
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
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 10,
                        // "scrollX": true
                    });
                    });
              })
        },

        deleteAgent(agent){
            
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
             
                axios.post(`delete-agent/${agent.id}`).then(res =>{
               
                    if(res.data.msg){
                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                    });

                    let index = this.agents.indexOf(agent);
                    this.agents.splice(index, 1);

                    axios.get("agents").then((res)=>{
                       this.agents = res.data;
                    });
                    
                    }

                    if(res.data.error_msg){
                        Toast.fire({
                                icon: 'error',
                                title: res.data.error_msg
                        });
                    }

                })

              }
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

.ref_td{
    background: #e7e9e650;
    color: #000;
}

@media only screen and (max-width: 1000px){
	.database__table{
    overflow-x: scroll;
}
}
</style>