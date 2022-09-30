import { products } from "../../store/products"



export const filterReducer=(state=products, action)=>{
switch(action.type){
    case "ALL":{
        return products;
    }

    case "FILTER":{
        return products.filter((pro)=>pro.category===action.payload)
    }
    default:{
        return products;
    }
}

}