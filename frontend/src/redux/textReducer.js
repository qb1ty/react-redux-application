import { TEXT } from "./types"

const initialState = {
    text: ''
}

export function textReducer(state = initialState, action) {
    switch (action.type) {
        case TEXT: return {...state, text: action.payload}
        default: return state
    }
}