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
                                    <form @submit.prevent="login" class="user">
                                        <div class="form-group">
                                            <input type="email" v-model="form.email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Enter Email Address...">
                                                <small v-if="errors.email" class="form-text text-danger">{{ errors.email[0] }}</small>
                                        </div>
                                        <div class="form-group">
                                            <input type="password" v-model="form.password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password">
                                        </div>
                                        <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input type="checkbox" class="custom-control-input" id="customCheck">
                                                <label class="custom-control-label" for="customCheck">Remember
                                                    Me</label>
                                            </div>
                                        </div>
                                        <button type="submit" class="btn btn-primary btn-user btn-block">Login</button>
                                    </form>
                                    <hr>
                                    <div class="text-center">
                                        <a class="small" href="#">Forgot Password?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="#">Create an Account!</a>
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
            form:{
                email: '',
                password: ''
            }
        }
        },
    methods:{
         login(){

             axios.get('sanctum/csrf-cookie').then(response => {
            
             axios.post('login',this.form).then(response =>{

             const token = response.data.token;
             const user = response.data.user;

              //  if user role is not "user" then it will work
             if(user.role !== 'user'){
                  this.$store.commit('SET_AUTHENTICATED',true);
                  this.$router.push({name:'Dashboard'});
                  this.$store.commit('SET_USER', response.data.user);
                  localStorage.setItem('token', token);

                  Toast.fire({
                        icon: 'success',
                        title: 'Login Success.'
                    });
             }

             else{

                 Toast.fire({
                        icon: 'error',
                        title: 'The provided credentials are incorrect.'
                 });

             }

            })

            .catch(() => {
                
                Toast.fire({
                        icon: 'error',
                        title: 'The provided credentials are incorrect.'
                    });

                });
            });

        },

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