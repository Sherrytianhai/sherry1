<template>
    <div>
        <h1>购物车</h1><br />
        <div v-if="Hero.length==0">
          <h1>请添加商品</h1>
        </div>
    <div v-else id="ju">
    <ul>
      <li v-for="item in this.$store.state.shopcart.Hero" :key="item.img">
        <img :src="item.img" />
        <br>
        {{item.name}}
        <br>
        ${{item.Price}}<span style="color:pink">*{{item.num}}</span>
        <br>
        <button  @click="delA(item)">删除</button>
      </li>
    </ul>
    </div>
    <h1>
      商品总价:{{totalPrice}}
    </h1>
    </div>
</template>
<script>

import { mapState,mapActions,mapGetters } from 'vuex'

export default{
  computed:{
    ...mapState({
      Hero:state=>state.shopcart.Hero
    }),
    ...mapGetters('shopcart',['totalPrice'])
  },
  methods:{
    ...mapActions('shopcart',['delA'])
  }
}
</script>

<style>
#dd{
  text-align: center;
}
#ju{
  display: inline-block;
}
ul{
  margin:0px;
}
ul>li>img{
  margin-left: 30px;
  width: 100px;
  height: 150px;
  border: rgb(126, 128, 0) 3px solid;
}
</style>