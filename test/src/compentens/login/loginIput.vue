<template>
  <div>
    {{ info.title }}<input type="text" v-model="info.input">
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
        title: String,
        input: String
      }
    }
  }
</script>

<style scoped>

</style>
