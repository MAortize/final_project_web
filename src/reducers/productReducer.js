import { READ_ALL_DATA, NO_DATA } from "../types/types";

export const initialState = {
    db:[]
}

export function productReducer(state = initialState, action){
    switch (action.type) {
        case READ_ALL_DATA: {
            console.log(action.payload);
            return {
                ...state,
                db: action.payload.map(data => data)
            }
        }
        case NO_DATA:
            return initialState;
        default:
            return state;
    }
}