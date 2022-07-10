import { data } from "jquery"

const state={
    Hero: []
}

const mutations={
    //向购物车中添加内容
    addM:(state,data)=>{
        var result=state.Hero.find((value,index,arr)=>value.name==data.name)
        if(result){
            result.num++;
        }else{
        state.Hero.push({
            img:data.img,
            name:data.name,
            Price:data.Price,
            num:1
        })
        }
    },
    delM:(state,data)=>{
        state.Hero.forEach((value,index,arr)=>{
            if(value.name==data.name){
                arr.splice(index,1)
            }
        })
    }
}
const getters={
    totalPrice:state=>{
        return state.Hero.reduce((total,value,arr)=>{
            return total+value.num*value.Price
        },0)
    }
}
const actions={
    //调用mutations中的方法
    addA:(context,data)=>{
        context.commit('addM',data)
    },
    delA:(context,data)=>{
        context.commit('delM',data)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    getters,
    actions,
}