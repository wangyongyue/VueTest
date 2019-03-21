<template>
  <div>
    <p>{{ info.title }}</p>
  </div>
</template>

<script>
  export default {
    data (){
      return{

      }
    },
    props:{
      info:{
        title: String
      }
    }
  }
</script>

<style scoped>

</style>
