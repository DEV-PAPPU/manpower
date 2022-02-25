<template>
    <div class="">
        <div class="card shadow mb-4">
            <!-- Card Header - Dropdown -->
            <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 class="m-0 font-weight-bold text-white">ALL TKT</h6>
                <router-link :to="{name: 'TKTLists'}" class="btn bg-light btn-sm">Back To List</router-link>
            </div>
            <!-- Card Body -->
            <div class="card-body">
                <table class="table table-hover table-bordered dbtable">
                    <thead>
                        <tr>
                            <th>S/L</th>
                             <th>Proccessing Date</th>
                            <th>Passenger Name</th>
                            <th>Passport No.</th>
                            <th>Company Name</th>
                            <th>Trade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in passengers" :key="item.id">
                            <td>{{item.id}}</td>
                            <td>{{item.tkt_date}}</td>
                            <td>{{item.passenger_name}}</td>
                            <td>{{item.passport_no}}</td>
                            <td>{{item.company_name}}</td>
                            <td>{{item.trade}}</td>
                            <td>
                                <a href="#" @click="deleteStmPassenger(item.id)"><i
                                        class="fas delete_icon fa-trash-alt"></i></a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data : () =>{
        return {
            passengers:'',
        }
    },

    methods:{

        deleteStmPassenger(id){
              
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

                axios.post(`tkt/passenger/delete/${id}`).then(res =>{
                   
                    if(res.data.msg){
                      
                        Toast.fire({
                            icon: 'success',
                            title: res.data.msg
                        });

                         window.location.reload();
                     }

                    if(res.data.error_msg){
                        Toast.fire({
                                icon: 'error',
                                title: res.data.error_msg
                        });
                    }

              });
              }
            })
        }
    },


    mounted() {

            let id = this.$route.params.id;
           
            axios.get(`tkt/edit/${id}`).then(res =>{
                this.date = res.data.stm_date;
                this.passengers = res.data.passenger;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                    });
                });
            });

        }

}
</script>


<style scoped>
.search_btn{
    margin-top: 30px;
}

table.dataTable thead th, table.dataTable thead td {
    font-size: 13px;
    font-weight: 500;
    color: rgb(43, 43, 43);
}

.table td, .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #e3e6f0;
    font-size: 14;
}

.delete_icon{
    color: rgb(238, 12, 12);
}
</style>