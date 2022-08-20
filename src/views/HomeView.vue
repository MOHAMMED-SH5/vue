<template>
  <b-container>
      <B-row>
          <b-col col sm="12" col-md="10" lg="12">
            
                <div class="overflow-auto">
                <b-pagination 
                  v-model="currentPage"
                  :total-rows="rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                ></b-pagination>  

                <p class="Current mt-3">{{ $t('message.currentPage') }}</p>

                <div class="d-flex justify-content-end">
                     <b-button @click="goToHome()" class="btn-sing mb-2 " variant="outline-primary">
                    {{ $t('message.formmessage') }}
                    </b-button>
                </div>


                <b-table
                  id="my-table"
                  :items="items"
                  :per-page="perPage"
                  :current-page="currentPage"
                  small
                ></b-table>
              </div>
          </b-col>



      </B-row>
  </b-container>
</template>

<script>
  export default {
      data() {
      return {
        perPage: 4,
        currentPage: 1,
        items: [
          { FirstName:'dd', LastName: 'Fred', numberclass: 'Flintstone',finallmarks:'90',email:'moddf@gmail.com'}
        ]
      }
    },
    computed: {
      rows() {
        return this.items.length
      }
    },
     methods:{
        goToHome(){
        this.$router.push('/about'); 
    }
  }
  }
</script>


<style scoped>
  .Current
  {
    color: white;
  }
  .sing
  {
    color: white;
    text-decoration: none;
  }
  .btn-sing
  {
    width: 100px;
  }
  .btn-sing:hover
  {
    background-color: #070C24;
  }
</style>