<template>
    <div id="dd">
    
    <div id="ju">
    <ul class="hero">
      
      <input id="juzhon" type="text" v-model="hname" @input="search" class="form-control" placeholder="请输入...." />
      <li  v-for="item in this.$store.getters['heroList/search']" :key="item.hname">
        <img :src="item.img" />
        <br>
        {{ item.name }}
        <br>
        ${{ item.Price }}
        <br>
        <button @click="addA(item)" style="background-color: ;">加入购物车</button>
      </li>
    </ul>
    </div>
    </div>
</template>
<script>

import { mapState,mapActions} from 'vuex'

export default{

data(){
  return{
    hname:''
  }
}
,
  methods: {
    search() {
      this.$store.commit("heroList/search", this.hname);
    },
    ...mapActions('shopcart',['addA'])
  }
}
</script>


<style>
#juzhon{
        width: 100%;
        height: 30px;
    
}
.form-control{
  margin-bottom:30px;
  width: 350px;
}
#dd{
  text-align: center;
}
#ju{
  display: inline-block;
  text-align: center;
  
  
  
}
ul>li>img{
  margin-left: 30px;
  width: 100px;
  height: 150px;
  border: rgb(126, 128, 0) 3px solid;
}
ul{
  margin:0px;
}
</style>
