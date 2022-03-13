<template>
    <div>
        <div class="row">
            <div class="ml-2 card shadow mb-4 col-md-7 mr-5">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Trade List</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th>Trade Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="trade in trades" :key="trade.id">
                                    <td>{{trade.id}}</td>
                                    <td>{{trade.trade_name}}</td>
                                    <td>
                                        <button @click="edit(trade)" ><i class="far edit_icon fa-edit"></i></button>
                                        <button @click="deletetrade(trade)"><i
                                                class="fas delete_icon fa-trash-alt"></i></button>
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
                    <h6 class="m-0 font-weight-bold text-white">trade List</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <div class="form-group">
                                    <label for="PerAddress">Trade Name</label>
                                    <input class="form-control" v-model="form.trade_name" type="text" required>
                                    <small v-if="errors.trade_name"
                                        class="form-text text-danger">{{ errors.trade_name[0] }}</small>
                                </div>
                        </div>

                        <div class="form-group">
                            <div class="d-flex gap-3" style="clear:both;">
                                <button v-if="isEdit" class="btn btn-success" @click.prevent="update">Update</button>
                                <button v-else class="btn btn-success" @click.prevent="addtrade">Save Changes</button>
                                <!-- <button class="btn btn-danger" @click.prevent="Cancel" type="reset">Cancel</button> -->
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
             trade_name: ''
            },
            trades:[],
            errors: '',
            isEdit: false,
            trade_id:'',
        }
    },

    methods:{

        loadTrade(){
            //API Call
            axios.get("trade/lists")
            .then((res)=>
            {
                this.trades = res.data;
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

        addtrade(){

            axios.post('trade/add', this.form).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.form.trade_name = ''

                axios.get("trade/lists").then(res =>{
                     this.trades = res.data;
                })
            })
            .catch(e => {
                     this.errors = e.response.data.errors                     
                });

        },

        edit(trade){
         this.isEdit = true
         this.trade_id = trade.id;
         this.form = trade;

        },

        update(){
            let id = this.trade_id
            axios.post(`trade/update/${id}`,this.form).then(response =>{
               
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.isEdit = false;
                this.form = '';
                this.form.trade_name = '';
                
                axios.get("trade/lists").then(res =>{
                     this.trades = res.data;
                })
            })

            .catch(e => {
                     this.errors = e.response.data.errors                     
            });
        },

        deletetrade(trade){
            let id = trade.id

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
             
            //   let index = this.trades.indexOf(trade);
            //   this.trades.splice(index, 1);

                axios.post(`trade/delete/${id}`).then(res =>{
                  
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
            
        },

        Cancel(){
           this.isEdit = false;
           this.form.trade_name = '';
        },
    },

    mounted() {
        this.loadTrade();
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
</style>