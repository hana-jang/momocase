import { configureStore, createSlice } from '@reduxjs/toolkit';


let cart=createSlice({
    name:'cart',
    initialState:[
        {id:0, name:"아크릴세트 ★★ BUTTER", img:'img/best1.jpg', price:16200,count:1, design:'아이폰se2'}
    ],
    reducers:{
        addCount(state, action){
            let num=state.findIndex((a)=>{return a.id===action.payload})
            state[num].count++
        },
        minusCount(state,action){
            let num1=state.findIndex((a)=>{return a.id===action.payload})
            state[num1].count--
            if(state[num1].count==0){
                alert("최소 주문량은 1개입니다");
                state[num1].count=1;
            }
        },
        addItem(state, action){
            state.push(action.payload)
            state.map((v,i)=>{
                // return [state[i].id, state[i].option]
                return state[i].id
            })
            
            // for(let i=0; i<state.length-1; i++){
            //     if(copy[i]==state[state.length -1].id){
            //         state.pop();
            //         state[copy[i]].count+=1
            //     }
            // }
            alert("장바구니 담기 성공!")
        },
        sortName(state){
            state.sort((a,b)=>a.name>b.name? 1:-1)
        },
        deleteItem(state, action){
            let num2=state.findIndex((a)=>{return a.id===action.payload})
            state.splice(num2, 1);
        }
    }
})

export let{addCount, minusCount, addItem, sortName, deleteItem}=cart.actions;

export default configureStore({
    reducer:{cart:cart.reducer}
})