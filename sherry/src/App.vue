<template>
  <div id="app">
  <div class="router">
  
    <router-link to="/" tag="button" >英雄列表</router-link> 
    <router-link to="/shopcart" tag="button" > 购物车 </router-link>
  
      </div>
      <router-view />
      <div class="button">
      </div> 
    </div>
</template>

<script>
export default {
  name: "App",
  name: "",
  methods: {
    search() {
      this.$store.commit("herolist/search", this.name);
    },
  },
};
</script>

<style>
.router button{
  display: inline-block;
  height:30px;
  background-color: burlywood;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 60px;
}
ul {
  list-style: none;
  padding: 0;
  margin: 200px;
  text-decoration: none;
}
li {
  float: left;
}
#btn1 {
  position: absolute;
  bottom: 0;
  left: 250px;
  width: 400px;
  height: 75px;
  font-size: 36px;
}
ul {
  text-align: center;
  margin-right: -50px;
  overflow: hidden;
}
li {
  float: left;
  width: 87px;
  margin-bottom: 34px;
  margin-right: 30px;
}
a {
  display: block;
  width: 100%;
  text-align: center;
}
img {
  width: 83px;
  height: 83px;
  border: 2px solid red;
  border-radius: 10px 0 10px 0;
}
#btn2 {
  position: absolute;
  bottom: 0;
  left: 900px;
  width: 400px;
  height: 75px;
  font-size: 36px;
}
</style>
