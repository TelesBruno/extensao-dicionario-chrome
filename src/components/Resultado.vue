<template>
<div id='resultado'>
    <p><i>{{tipo}}</i></p>
    <p><b>Significado:</b> <span>{{significado}}</span></p>
    <p><b>Etimologia:</b><span>{{etimologia}}</span></p>
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
#resultado {
  margin-top:30px;
  color: black;
}
</style>
