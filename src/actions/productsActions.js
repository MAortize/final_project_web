import { READ_ALL_DATA, NO_DATA } from "../types/types";


export const readAllAction = (data) => ({type: READ_ALL_DATA, payload: data});

export const noAction = () => ({type: NO_DATA})