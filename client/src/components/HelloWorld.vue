<template>
  <div class="hello">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Welcome to the Vue App</h1>
    <h3><router-link :to="{ name: 'Posts' }">Posts CRUD</router-link></h3>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
