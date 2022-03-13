<template>
    <div class="login__page bg-gradient-primary">
        <!-- Outer Row -->
        <div class="row justify-content-center">

            <div class="login__div col-xl-8 col-lg-8 col-md-9">

                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <!-- Nested Row within Card Body -->
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Welcome Back! {{errors}}</h1>
                                    </div>
                                    <form @submit.prevent="reset" class="user">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email"
                                                class="form-control form-control-user">
                                        </div>

                                        <div v-if="is_email">
                                            <div class="form-group">
                                                    <label for="UserRole">Password </label>
                                                    <input class="form-control" v-model="form.password" type="password">
                                                </div>

                                           <!-- <div class="form-group">
                                                    <label for="UserRole">Password Confirmation</label>
                                                    <input class="form-control" v-model="form.password_confirmation"
                                                        type="password">

                                          </div> -->
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Submit</button>
                                    </form>
                                    <hr>

                                    <div class="text-center">
                                        <router-link :to="{name: 'Login'}" class="small">Login</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            errors: '',
            success: '',
            is_email: false,
            form:{
                email: '',
                password: '',
                password_confirmation: ''
            }
        }
        },
    methods:{
         reset(){

             axios.post('password-reset',this.form).then(res =>{
               
                if(res.data.isUser){
                    this.is_email = true
                 }
               
                if(res.data.msg){
                    Toast.fire({
                        icon: 'success',
                        title: res.data.msg
                });

                 this.$router.push({name:'Login'});

                }

                 if(res.data.error_msg){
                    Toast.fire({
                        icon: 'error',
                        title: res.data.error_msg
                });

                 
                }


             })
             .catch(e =>{
                  Toast.fire({
                        icon: 'error',
                        title: 'The password must be at least 6 characters.'
                });
             })

         }      
 

    },

    mounted(){
        // axios.post('logout')
    }

}
</script>


<style scoped>
.login__page{
    height: 100vh;
    overflow-x: hidden;
}

.login__div{
    margin-top: 80px;
}
</style>