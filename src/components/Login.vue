<template>
  <div class="wrapper">
    <b-container>
      <div class="mx-auto" style="width:300px;margin-top:50px">
        <!-- <img src="@/assets/pic/logow.webp" style="width:100%; height:100%"> -->
      </div>
    </b-container>
    <b-container>
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="4">
          <b-card class="o-hidden border-0 shadow-lg my-5">
            <b-card-text v-if="register">
              <template v-if="show">
                <b-form @submit.prevent="signUp">
                  <b-form-group class="mt-4" id="input-group-1" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Username" required></b-form-input>
                  </b-form-group>
                  <b-form-group class="mt-4" id="input-group-2" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.password" type="password" placeholder="password" required></b-form-input>
                  </b-form-group>
                  <b-form-group class="mt-4" id="input-group-2" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.email" type="text" placeholder="email" required></b-form-input>
                  </b-form-group>
                  <!-- <b-button pill class="text-bold mt-4 w-100" type="submit" variant="outline-primary">{{btn.text}}<b-spinner small v-if="btnClicked['b']"></b-spinner></b-button> -->
                  <b-button pill class="mt-3 text-bold w-100" type="submit" variant="dark">Sign up</b-button>
                  <p class="text-danger text-center pt-3">{{msg.err}}</p>
                </b-form>
                <b-button pill class="mt-3 text-bold w-100" variant="outline-primary" @click="toggleRegister()">Login</b-button>
              </template>
              <template v-else>
                <b-form @submit.prevent="confirmSignUp">
                  <b-form-group class="mt-4" id="input-group-1" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Username" readonly></b-form-input>
                  </b-form-group>
                  <b-form-group class="mt-4" id="input-group-2" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.code" type="number" placeholder="Verification Code" required></b-form-input>
                  </b-form-group>
                  <b-button pill class="mt-3 text-bold w-100" type="submit" variant="dark">Verify</b-button>
                  <p class="text-danger text-center pt-3">{{msg.err}}</p>
                </b-form>
              </template>
            </b-card-text>
            <b-card-text class="p-0" v-else>
              <div class="col-lg-11" style="margin: 30px auto;">
                <div class="text-center mb-4">
                  <h3 class="font-weight-bold" dlang="login-title">Login</h3>
                  <p dlang="login-msg" class="text-dark">Login to access</p>
                  <hr>
                </div>
                <b-form @submit.prevent="onSubmit">
                  <b-form-group class="mt-4" id="input-group-1" label-for="input-1">
                    <b-form-input id="input-1" v-model="form.username" type="text" placeholder="Username" required></b-form-input>
                  </b-form-group>
                  <b-form-group class="mt-4" id="input-group-2" label-for="input-2">
                    <b-form-input id="input-2" v-model="form.password" type="password" placeholder="password" required></b-form-input>
                  </b-form-group>
                  <b-button pill class="text-bold mt-4 w-100" type="submit" variant="outline-primary">{{btn.text}}<b-spinner small v-if="btnClicked['b']"></b-spinner></b-button>
                  <b-button pill class="mt-3 text-bold w-100" variant="dark" @click="toggleRegister()">Sign up</b-button>
                  <p class="text-danger text-center pt-3">{{msg.err}}</p>
                </b-form>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { Auth } from 'aws-amplify';
  import store from '../store/index'

  export default {
    name: 'Login',
    data(){
      return{
        register:false,
        form:{
          username:'',
          password:'',
          email:'',
          code:''
        },
        btn:{
          text:'Login',//this.$i18n.t('login.login'),
        },
        msg:{
          err:''
        },
        btnClicked : [],
        show: true
      }
    },
    methods: {
      async toggleRegister(){
        this.register = !this.register;
      },
      async signUp(event){
        try{
          var username = this.form.username,
          password = this.form.password,
          email = this.form.email;
          const { user } = await Auth.signUp({
            username,
            password,
            attributes:{
              email
            }
          });
          console.log(user);
          this.show = false;
        } catch (error) {
          console.log('error signing up:', error);
        }
      },
      async confirmSignUp(event){
        try {
          await Auth.confirmSignUp(this.form.username, this.form.code);
          const user = {'username':this.form.username,'attributes':{'email':this.form.email}}
          store.commit('authStateChanged', user);
          this.$router.replace({name: "Dashboard"});
        } catch (error) {
          console.log('error confirming sign up', error);
        }
      },
      async onSubmit(event) {
        event.preventDefault();
        this.btn.text = '';
        this.msg.err = '';
        Vue.set(this.btnClicked,'b',1);
        try {
          const user = await Auth.signIn(this.form.username, this.form.password);
          this.btn.text = 'Login';//this.$i18n.t('login.login');
          console.log(user);
          store.commit('authStateChanged', user);
          Vue.set(this.btnClicked,'b',0);
          this.$router.replace({name: "Dashboard"});
        } catch (error) {
          this.btn.text = 'Login';//this.$i18n.t('login.login');
          Vue.set(this.btnClicked,'b',0);
          this.msg.err = error;
          // console.log('error signing in', error);
        }
      }
    }
  }
</script>

<style scoped>
.card{
  height:auto !important;
}
</style>