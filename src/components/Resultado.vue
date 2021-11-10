<template>
<div>
    <p><i>{{tipo}}</i></p>
    <p>Significado: <span>{{significado}}</span></p>
    <p>Etimologia:<span>{{etimologia}}</span></p>
</div>

</template>

<script>

export default ({
  name: 'resultado',
  props: {
    tipo: String,
    etimologia: String,
    significado: String
  },
  data () {
    return {

    }
  }
})
</script>

<style scoped>

</style>
