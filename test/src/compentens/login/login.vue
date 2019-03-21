<template>
  <div >
    <p>{{msg}}</p>
    <login-iput
      v-for="info in infos"
      :info="info"
    ></login-iput>
    <button @click="loginMian">登录</button>

  </div>
</template>
<script>
  import loginIput from "./loginIput";

  export default {
    data () {
      return {
        msg:'登录',
        infos:[
          {title:"用户名 ",input:""},
          {title:"密码   ",input:""}

        ]

      }
    },
    methods: {
      loginMian(){
        var username = this.infos[0].input
        var password = this.infos[1].input
        // alert(this)
        this.$router.push('work')

      },
    },
    components: {

      loginIput:loginIput,

    }

  }

</script>
<style>


</style>
