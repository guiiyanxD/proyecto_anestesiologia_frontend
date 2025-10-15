<template>
  <nav>
    <router-link to="/">Welcome</router-link> |
    <router-link to="/registrar">Registrar</router-link> |
  </nav>
  <router-view/>
</template>

<style>
@import './../node_modules/@vueform/vueform/dist/vueform.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #737d88;
}

p {
  color: #737d88;
}

nav a.router-link-exact-active {
  color: #f7bad9;
}
</style>
