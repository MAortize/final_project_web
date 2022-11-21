import { ADD_TO_CART } from "../types/types";

export const initialState = {
    cart:[]
}

export function cartReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TO_CART:
            
            break;
    
        default:
            break;
    }
}