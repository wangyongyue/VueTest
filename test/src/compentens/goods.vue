<template>
  <div>
    <p>{{title}}</p>
    <tiger2
      v-for="info in tiger2Info"
      v-bind:info="info"
      v-on:todo="totiger2"
    ></tiger2>
    <p v-if="show">加载中...</p>

  </div>
</template>
<script>

  import tiger2 from "./tiger2"

  export default {

    data() {
      return {
        title:'goods',
        show:true,
        tiger2Info:[

        ],
      }
    },
    components:{
      tiger2:tiger2,

    },

    mounted () {
      this.show = false
      let th = this
      this.$http
        .get('http://118.190.148.67:8084/nxccims-app/sysUser/getSysUser')
        .then(function (response) {
          let a = response.data.message
          th.title = a
          th.tiger2Info = [
            {title:'w'},
            {title:'e'},
            {title:'r'}
          ]

        })
        .catch(function (error) {
          alert(error)
        })

    }

  }

</script>
