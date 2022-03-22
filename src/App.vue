<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/explore">Explore</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/faq">FAQ</router-link> |
      <router-link to="/contact">Concat US</router-link> |
      <router-link to="/login">Create Now</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #eaeaea;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #eaeaea;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
