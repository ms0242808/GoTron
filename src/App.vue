<template>
  <div id="app">
    <b-navbar v-if="showNav" id="nav" toggleable="lg" type="dark" variant="dark" sticky>
      <b-navbar variant="faded" type="light">
        <b-navbar-brand to="/">GoTron</b-navbar-brand>
      </b-navbar>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ms-auto al-c">
          <b-nav-item to="/explore">Explore</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/faq">FAQ</b-nav-item>
          <b-nav-item to="/contact">Concat US</b-nav-item>
          <b-nav-item to="/login" v-if="!loginState"><b-button size="sm" variant="outline-light">Create Now</b-button></b-nav-item>
          <b-nav-item to="/dashboard/overview" v-else><b-button size="sm" variant="light">Dashboard</b-button></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
    <div class="justify-content-md-center mb-2">
      <footer class="sticky-footer">
        <div class="mx-auto">
          <div class="copyright text-center text-dark">
            <small>Copyright &copy; GOTRON 2022</small>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
import store from './store/index'

export default {
  name: 'App',
  computed:{
    'showNav':function(){
      var nav = ['Home','Explore','About','Faq','Contact','Login'];
      if(nav.includes(this.$route.name)){return true}else{return false}
    },
    'loginState':function(){
      return store.getters.getAuthState
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #eaeaea; */
}

#nav {
  padding: 5px 30px;
}

#nav a {
  font-weight: bold;
  color: #eaeaea;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
