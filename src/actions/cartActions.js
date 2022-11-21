import { ADD_TO_CART } from "../types/types";

export const onAdd = (id) => ({type: ADD_TO_CART, payload: id});