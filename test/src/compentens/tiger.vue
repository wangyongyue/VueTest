<template>
  <div>
    <p>{{ info.title }}</p>
    {{ info.head }}<input type="text" v-model="info.title">
    <button type="button" @click="togo">点击</button>
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
        head: String
      }
    },
    methods:{
      togo () {
        this.$emit('todo',this.info.title)
      }
    }
  }
</script>

<style scoped>

</style>
