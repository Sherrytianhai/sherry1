const state={
    name:"",
    Hero: [
        {name:'王枞',img:' ./static/img/1.webp',Price:1111},
        {name:'田海',img:' /static/img/3.jpg',Price:2222},
        {name:'谢祺峰',img:' /static/img/5.jpg',Price:3333},
        {name:'吴天伟',img:'  /static/img/6.png',Price:4444},
        {name:'李玉跃',img:'   /static/img/2.webp',Price:5555},
        {name:'张云',img:' /static/img/4.webp',Price:6666},
      ]
}

const mutations={
    increase(state) {
        state.count++
    },
    search(state,name){
        state.name=name
    }
}
const getters={
    search:state=>{
        return state.Hero.filter(hero=>hero.name.indexOf(state.name)!==-1)
    }
}
const actions={

}
export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions
}