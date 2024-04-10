import { TODO_ADD, TODO_CHECKED, TODO_REMOVE } from "./types";

const initialState = {
    todos: [],
}

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case TODO_ADD: return {...state, todos: [...state.todos, action.payload]}
        case TODO_REMOVE: return {...state, todos: action.payload}
        case TODO_CHECKED: return {...state, todos: action.payload}
        default: return state
    }
}