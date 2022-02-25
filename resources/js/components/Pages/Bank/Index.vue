<template>
    <div>
        <div class="row">
            <div class="ml-2 card shadow mb-4 col-md-7 mr-5">
                <!-- Card Header - Dropdown -->
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-white">Bank List</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <div class="database__table">
                        <table class="table table-hover table-bordered dbtable">
                            <thead>
                                <tr>
                                    <th>S/L</th>
                                    <th>Bank Name</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="item in banks" :key="item.id">
                                    <td>{{item.id}}</td>
                                    <td>{{item.bank_name}}</td>
                                    <td>
                                        <button @click="edit(item)" ><i class="far edit_icon fa-edit"></i></button>
                                        
                                        <button @click="deleteBank(item)"><i
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
                    <h6 class="m-0 font-weight-bold text-white">Bank Form</h6>
                </div>
                <!-- Card Body -->
                <div class="card-body">
                    <form>
                        <div class="form-group">
                            <div class="form-group">
                                    <label for="PerAddress">Bank Name</label>
                                    <input class="form-control" v-model="form.bank_name" type="text" required >
                                    
                                    <small v-if="errors.bank_name"
                                        class="form-text text-danger">{{ errors.bank_name[0] }}</small>
                                </div>
                        </div>

                        <div class="form-group">
                            <div class="d-flex gap-3" style="clear:both;">
                                <button v-if="isEdit" class="btn btn-success" @click="update">Update</button>
                                <button v-else class="btn btn-success" @click.prevent="addBank">Save Changes</button>
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
             bank_name: ''
            },
            banks:[],
            errors: '',
            isEdit: false,
            bank_id:'',
        }
    },

    methods:{
        loadBank(){
            //API Call
            axios.get("bank/lists")
            .then((res)=>
            {
                this.banks = res.data;
                setTimeout(() => {
                    $(".dbtable").DataTable({
                        lengthMenu: [
                        [5,10, 25, 50, -1],
                        [5,10, 25, 50, "All"],
                        ],
                        pageLength: 5,
                        // destroy: true,
                        orderCellsTop: true,
                        // "bDestroy": true,                        
                    });
                    });
              })
        },

        addBank(){

            if(this.form.bank_name){
              axios.post('bank/add', this.form).then(response =>{
                     
                    window.location.reload();

                    Toast.fire({
                            icon: 'success',
                            title: response.data.msg
                    });

               })

            .catch(e => {
                     this.errors = e.response.data.errors                     
                });
            }
            else{
                alert('Please Add Bank Name')
            }
            

        },

        edit(bank){
         this.isEdit = true
         this.bank_id = bank.id;
         this.form = bank;

        },

        update(){
            let id = this.bank_id
            axios.post(`bank/update/${id}`,this.form).then(response =>{
                Toast.fire({
                        icon: 'success',
                        title: response.data.msg
                });

                this.isEdit = false;
                this.form = '';
                this.form.bank_name = '';
                
                axios.get("bank/lists").then(res =>{
                     this.banks = res.data;
                })
            })

            .catch(e => {
                     this.errors = e.response.data.errors                     
            });
        },

        deleteBank(bank){
            let id = bank.id

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
             
            //   let index = this.banks.indexOf(bank);
            //   this.banks.splice(index, 1);

                axios.post(`bank/delete/${id}`).then(res =>{
                
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
           this.form.bank_name = '';
        },
    },

    mounted() {
        this.loadBank();
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