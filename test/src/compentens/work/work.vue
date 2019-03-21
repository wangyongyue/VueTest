<template>
  <div>
    <workItem
      v-for="info in infos"
      :info="info"
      v-on:dianzan="dianzan"
    ></workItem>
  </div>


</template>

<script>
    import workItem from "./workItem";

    export default {
        data () {
          return {
            infos: [
              {title: "sdf", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sdf", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "s3df", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sdf", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sdf", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},
              {title: "sd2f", content: "上的垃圾数量发生了房间数量的就是可怜的份上", time: "2019-12-12"},

            ]
          }

        },
        components:{
          workItem:workItem,
        },
        methods:{
          dianzan(data){

            alert(data)
          }


        }




    }
</script>

<style scoped>

</style>
