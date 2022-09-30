const initState=[]


export const cardReducer=(state=initState, action)=>{
switch(action.type){
    case "ADD":{
        let tempcart=state.filter((item)=>item.id===action.payload.id);
        if(tempcart<1){
            return [...state,action.payload]
        }
        else{
            return state
        }
        
    }
    case "REMOVE":{
        return state.filter((item)=>item.id!==action.payload.id)
    }
    case "INCREASE":{
        let tempcart=state.map((item)=>{
            if(item.id===action.payload.id){
                return {...item, quantity:item.quantity+1}
            }
            return item
    });
    return tempcart;
    }
    case "DECREASE":{
        let tempcart=state.map((item)=>{
            if(item.id===action.payload.id){
                return {...item, quantity:item.quantity-1}
            }
            return item
        });
        return tempcart
    }
default:{
    return state
}
}
}