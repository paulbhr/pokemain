<template>
  <div id="app">
    <router-view/>
    <footer>
      <button>Règles !</button>
      <div class="score-board">
        <div class="score">
          Score: <span></span>
        </div>
        <div class="game">
          Partie: <span></span>/5
        </div>
        <div class="high">
          Meilleur: <span></span>
        </div>
      </div>
      <button>À Propos !</button>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
