<template>
  <div>
    <button type="button" @click="togo">点击</button>
    {{ info.title }}
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
      }
    },
    methods:{
      togo () {
        this.$emit('todo')
      }
    }
  }
</script>

<style scoped>

</style>
