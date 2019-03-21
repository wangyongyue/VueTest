<template>
  <div>
    <p>{{title}}</p>
    <tiger
      v-for="info in tigerInfo"
      v-bind:info="info"
      v-on:todo="totiger"
    ></tiger>
    <tiger1
      v-for="info in tiger1Info"
      v-bind:info="info"
    ></tiger1>
    <tiger2
      v-for="info in tiger2Info"
      v-bind:info="info"
      v-on:todo="totiger2"
    ></tiger2>
    <!--动态组件适合大型组件-->
    <component v-bind:is="currentView"></component>
    <tiger4>slot插槽</tiger4>
  </div>
</template>
<script>
  import tiger from "./tiger"
  import tiger1 from "./tiger1"
  import tiger2 from "./tiger2"
  import tiger3 from "./tiger3"
  import tiger4 from "./tiger4"

  export default {

    data() {
      return {
        title:'mine',
        tigerInfo:[
          {title:'', head:'tiger1'},
          {title:'', head:'tiger2'},
          {title:'', head:'tiger3'},
        ],
        tiger1Info:[
          {title:'wfwf', content:'tiger1-content'},
          {title:'wfe', content:'tiger2-content'},
          {title:'wfy', content:'tiger3-content'},
        ],
        tiger2Info:[
          {title:'w'},
          {title:'e'},
          {title:'r'},
        ],
        currentView:'tiger3',

      }
    },
    components:{
      tiger:tiger,
      tiger1:tiger1,
      tiger2:tiger2,
      tiger3:tiger3,
      tiger4:tiger4



    },
    methods:{

      totiger:function (name) {
        alert(name)
        // this.models[0].title = this.tigerInfo.title


      },
      totiger2:function () {
        alert(this.tigerInfo.title)
        // this.models[0].title = this.tigerInfo.title
      }
    }
  }

</script>
