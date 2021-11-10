<template>
  <div id="app">
    <div v-show="!finalizouBusca" id="primeira-tela">
      <div id="titulo">
        <h2>Dicionário da Língua Portuguesa</h2>
      </div>
      <div id="pesquisar">
        <input type="text" v-model="palavra" name="palavra" id="palavra" placeholder="pesquise uma palavra" />
        <button @click="pesquisarPlavra()">Pesquisar</button>
      </div>
    </div>
    <resultado
    v-show="finalizouBusca"
      :tipo="tipo"
      :etimologia="etimologia"
      :significado="significado"
    ></resultado>
  </div>
</template>

<script>
import Resultado from './components/Resultado.vue'
export default {
  components: { Resultado },
  name: 'app',
  data () {
    return {
      palavra: '',
      tipo: '',
      etimologia: '',
      significado: '',
      finalizouBusca: false
    }
  },
  methods: {
    pesquisarPlavra: function () {
      let api = 'https://significado.herokuapp.com/'
      if (this.palavra === null || this.palavra === '') {
        return
      }
      fetch((api += this.palavra))
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0].class)
          console.log(data[0].etymology)
          console.log(data[0].meanings[0])
          this.tipo = data[0].class
          this.etimologia = data[0].etymology
          this.significado = data[0].meanings[0]
          this.finalizouBusca = true
        })
    }
  }
}
</script>

<style>
body {
  width: 360px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#pesquisar {
  display: flex;
}
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
  border: 1px solid #3079ed;
  margin-left: 10px;
  background-color: #4d90fe;
  color: white;
}
</style>
