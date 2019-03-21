<template>
<div>
  {{ title }}
  <slot></slot>
</div>
</template>

<script>
  export default {
    data () {
      return{
        title:'插槽--'

      }
    }

  }
</script>

<style scoped>

</style>
