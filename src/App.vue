<template>

  <nav class="navbar navbar-expand-lg bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand " href="#" >Dra. Cecilia Diaz Pedraza </a>
    <button id="buttonToggler" class="navbar-toggler" type="button"  data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" ></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" ><router-link to="/" style="text-decoration: none;">Welcome</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link"  ><router-link to="/registrar" style="text-decoration: none;">Registrar</router-link></a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  <div class="py-5">
      <router-view/>
  </div>

  <!--<AppFooter  style="padding-bottom: 0px;"/> -->

</template>
<script>
/*import AppFooter from './components/Footer.vue';

export default {
  components: {
    AppFooter
  }
}
  */
</script>
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

.navbar-brand{
  font-weight: bold;
  color: #eeb2e4;
}

#buttonToggler{
  background: #eeb2e4;
}

nav a {
  font-weight: bold;
  color: #c7c1c7;
}

p {
  color: #737d88;
}

nav a.router-link-exact-active {
  color: #f7bad9;
}
</style>
