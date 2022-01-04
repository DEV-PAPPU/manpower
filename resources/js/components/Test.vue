<template>
   
<div class="container-fluid">
      <h1>Vue 3 jQuery DataTable Example Tutorial - Tutsmake.com</h1>
    
   <table class="table table-hover table-bordered" id="example">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
      </tr>
       
    </tbody>
  </table>
</div>
   
</template>
 
<script>
//Bootstrap and jQuery libraries
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"
import $ from 'jquery'; 
 
 
import axios from 'axios';
export default {
  
  mounted(){
    //API Call
    axios
    .get("users")
    .then((res)=>
    {
      this.users = res.data;
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
  data: function() {
        return {
            users:[]
        }
    },
}
</script>