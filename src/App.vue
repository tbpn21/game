<template>
<div id="app">
  <div id="app00">
  <router-link to="/about" tag="button" id="app01"><h2>菜单</h2></router-link>
  <router-link to="/home" tag="button" id="app01"><h2 >开始游戏</h2></router-link>
  </div>
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
   
};
</script>


<style>
#app{
  width: 500px;
    height: 600px;
    margin:0 auto;
    margin-top: 50px;
    background:lavender;
}
#app00{
  float: left;
  width: 500px;
  height: 50px;
  background: aliceblue;

}
#app01{
  margin-top: 8px;
  float:left;
  margin-left: 110px;
  
}
</style>
