<template>
    <b-container>
      <b-row>

          <b-col class="offset-lg-3 offset-md-3" sm="12" md="8" lg="7">
            
            <div class="d-flex justify-content-end">
              <b-button class="change" variant="outline-primary"  @click="switchLoc"> change languge </b-button>
            </div>


              <ValidationObserver v-slot="{ handleSubmit }">
              <form @submit.prevent="handleSubmit(onSubmit)" id="form">

                <ValidationObserver ref="form">
                    
                    

                  <ValidationProvider name="FirstName" rules="required|alpha" v-slot="{ errors }">
                    <input class="form-control mt-2" v-model="firstName" type="text">
                    <div class="erorrmessage">{{ errors[0] }}</div>
                  </ValidationProvider>

                 <ValidationProvider name="LastName" rules="required|alpha" v-slot="{ errors }">
                    <input class="form-control mt-2" v-model="LastName"   type="text">
                    <div class="erorrmessage">{{ errors[0] }}</div>
                  </ValidationProvider>


                  <ValidationProvider name="numberclass" rules="required|min_value:0|max_value:60" v-slot="{ errors }">
                    <input class="form-control mt-2" v-model="numberclass" type="number">
                    <div class="erorrmessage">{{ errors[0] }}</div>
                  </ValidationProvider>

                  <ValidationProvider name="finallmarks" rules="required|min_value:0|max_value:100" v-slot="{ errors }">
                    <input class="form-control mt-2" v-model="finallmarks" type="number">
                    <div class="erorrmessage">{{ errors[0] }}</div>
                  </ValidationProvider>
          

          

                  <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                    <input  class="form-control mt-2" type="text" v-model="email">
                    <div class="erorrmessage" >{{ errors[0] }}</div>
                  </ValidationProvider>



                <ValidationProvider  name="password" rules="required|password:@confirm" v-slot="{ errors }">
      
                  <input class="form-control mt-2" type="password" v-model="password" />
                    <div class="erorrmessage">{{ errors[0] }}</div>
                </ValidationProvider>


                <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
         
                  <input  class="form-control mt-2"  type="password" v-model="confirmation" />
                  <div class="erorrmessage">{{ errors[0] }}</div>
                </ValidationProvider>
              
                        

                </ValidationObserver>


                
              <b-button class="w-100 mt-2" type="submit" variant="outline-primary">sing up</b-button>

              </form>
                </ValidationObserver>
          </b-col>



      </b-row>
    </b-container>
</template>

<style>
  .lableform
  {
    color:#849FB4;
  }
  .erorrmessage
  {
    color: red;
  }
  .change
  {
    width: 150px;
  }
</style>

<script>

import { ValidationProvider, ValidationObserver } from "vee-validate";

import { extend } from 'vee-validate';
extend('password', {
  params: ['target'],
  validate(value, { target }) {
    return value === target;
  },
  message: 'Password confirmation does not match'
});


export default {
  data: () => ({
    email: "",
    password: "",
    confirmation:""
  }),
    components: {
    ValidationProvider,
    ValidationObserver
  },
  methods: { 
    onSubmit () {
      alert('Form has been succses!');
        this.$router.push('/'); 
    },
    switchLoc() {
      this.locale = this.locale === "en" ? "ar" : "en";
      this.$refs.form.validate();
    }
      
  }

}
</script>

