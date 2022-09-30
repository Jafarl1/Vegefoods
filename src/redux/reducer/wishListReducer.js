const initState=[];


export const wishListReducer=(state=initState, action)=>{
 switch(action.type){
    case "ADDTOWISH":{
        let tempwish=state.filter((item)=>item.id===action.payload.id);
        if(tempwish<1){
            return [...state,action.payload]
        }
        else{
            return state
        }
    }
    case "REMOVEWISH":{
        return state.filter((item)=>item.id!==action.payload.id)
    }
    default :{
        return state
    }
 }


}