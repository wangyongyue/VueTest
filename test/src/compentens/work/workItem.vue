<template>

  <div>
    <p>{{ info.title }}</p>
    <p>{{ info.content }}</p>
    <p>{{ info.time }}</p>
    <button type="button" @click="dianzan">点赞</button>
    <div id="line"></div>
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
          content: String,
          time:String
        }
      },
      methods:{
        dianzan () {
          this.$emit('dianzan',this.info.title)
        }
      }

    }
</script>

<style scoped>
  #line {

    width: 500px;
    background-color: red;
    height: 10px;
  }


</style>
