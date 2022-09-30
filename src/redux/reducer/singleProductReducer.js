const initState={}

export const singleReducer=(state=initState, action)=>{

switch(action.type){
    case "SINGLE":{
        return action.payload
    }
    case "INC":{
        return {
            ...state,
            quantity:action.payload+1
        }
    }
    case "DEC":{
        return{
            ...state,
            quantity:action.payload-1
        }
    }
    default:{
        return state
    }
       
}

}