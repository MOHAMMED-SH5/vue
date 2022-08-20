<template>
  <div class="allthings">
      <b-navbar toggleable="lg" type="dark" variant="#070C24">
          <b-container>
                    <b-navbar-brand  class="navbarword pr-4 pl-4" href="#">
                      <img src="../src/assets/logopa.png" alt="">
                    </b-navbar-brand>

                    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                    <b-collapse id="nav-collapse" is-nav>
    
                    <b-navbar-nav class="mx-auto">
                        <b-nav-item><router-link class="home" to="/">Home</router-link></b-nav-item>
                        <b-nav-item><router-link class="about" to="/about">About</router-link></b-nav-item>
                        <b-nav-item><router-link class="Table" to="/Table">Axios</router-link></b-nav-item>
                    </b-navbar-nav> 
                      <!-- Right aligned nav items -->
                       <select  class="select form-select" v-model="$i18n.locale"> 
                        <option 
                          v-for="(lang, i) in langs"
                          :key="`lang-${i}`"
                          :value="lang"
                        >
                          {{ lang }}
                        </option>
                      </select>

                    </b-collapse>

          </b-container>
      </b-navbar>




  <div>

</div>
    <router-view/>

  </div>
</template>


<script>
  export default 
  {
        data() {
        return { langs: ['english', 'arabic'] }
      },
      methods:
      {
          switchLoc() {
            this.locale = this.locale === "en" ? "ar" : "en";
            this.$refs.form.validate();
          }
      }

  }
</script>



<style scoped>
  .allthings
  {
    background-color: black;
    height: 1300vh;
  }
  .navbarword
  {
    color:#6783FF;
    font-size:25px;
  }
  .home,.about,.Table
  {
    color: #849FB4;
    font-size: 15px;
    font-family:'Montserrat';
    text-decoration: none;
  }
  .select
  {
    width: 10%;
  }
</style>