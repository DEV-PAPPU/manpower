<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card" style="margin-top:40px">
                    <v-select multiple  label="sector_name" v-model="selected" placeholder="Select One" :options="setors" />
                </div>
            </div>
        </div>
        <div>
            {{ selected }}
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import 'vue-select/dist/vue-select.css';

    export default {
        data(){
            return{
                selected: [],
                setors: ''
            }
        },
        
        mounted(){
          axios.get('sectors').then(res =>{
            this.setors = res.data;
          })
        }
    }
</script>
© 2022 GitHub, Inc.