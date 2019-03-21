
<template>
  <div>
    <p>{{msg}}</p>

    <p>分割线</p>
    <student
      v-for="info in infos"
      :title="info.title"
    ></student>
    <student :title="title"></student>
    <p>分割线</p>
    <cat
      v-for="model in models"
      :info="model"
    ></cat>
    <dog v-on:todo="todo"></dog>
    <lion
      v-on:todo="tolion"
    ></lion>
    <tiger
      v-bind:info="tigerInfo"
      v-on:todo="totiger"
    ></tiger>

  </div>
</template>
<script>
  import Vue from 'vue'
  import student from "./student";
  import cat from "./cat"
  import dog from "./dog"
  import lion from "./lion"
  import tiger from "./tiger"


  export default {

    data() {
      return {
        title:'123',
        msg:'wyyyyyyyy',
        models: [
          { id: 1, title: 'My journey with Vue' },
          { id: 2, title: 'Blogging with Vue' },
          { id: 3, title: 'Why Vue is so fun' }
        ],
        tigerInfo:{
          title:'',
          head:'tiger'
        }
      }
    },
    components:{
      student:student,
      cat:cat,
      dog:dog,
      lion:lion,
      tiger:tiger

    },
    methods:{
      todo:function (data) {
        this.$router.push('goods')
      },
      tolion:function (data) {

        this.$router.push('mine')
      },
      totiger:function () {
        // alert(this.tigerInfo.title)
        this.models[0].title = this.tigerInfo.title
      }
    }
  }

</script>

