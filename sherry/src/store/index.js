import Vue from 'vue';
import Vuex from 'vuex';

import heroList from './modules/heroList'
import shopcart from './modules/shopcart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        heroList,
        shopcart
    }
})