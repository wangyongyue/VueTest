<template>
  <div>
    <p>{{ info.title }}</p>
    <p>{{ info.content }}</p>
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
        content: String
      }
    },
  }
</script>

<style scoped>

</style>
