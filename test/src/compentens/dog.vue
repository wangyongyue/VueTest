<template>
  <div>
    <p>{{ title }}</p>
    <button @click="togo">点击</button>
  </div>
</template>

<script>
  export default {
    data (){
      return{
        title: 'change',
        count: 1
      }
    },
    methods:{
      togo () {
        this.count += 1
        this.title = this.count
        this.$emit('todo',this.count)
      }
    }
  }
</script>

<style scoped>

</style>
