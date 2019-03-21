<template>
<div>
  <p>{{ title }}</p>
  请输入：<input type="text" v-model="title">
  <button type="button" @click="togo">点击</button>
</div>
</template>

<script>
  export default {
    data (){
      return{
        title: '',
      }
    },
    methods:{
      togo () {
        this.$emit('todo',this.title)
      }
    }
  }
</script>

<style scoped>

</style>
