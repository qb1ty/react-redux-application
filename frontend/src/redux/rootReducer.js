import { combineReducers } from "redux";
import { textReducer } from "./textReducer";
import { todoReducer } from "./todoReducer";


export const rootReducer = combineReducers({
    todo: todoReducer,
    text: textReducer,
})