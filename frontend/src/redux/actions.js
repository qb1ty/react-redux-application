import { TEXT, TODO_ADD, TODO_CHECKED, TODO_REMOVE } from "./types";

export function addTodo(text, setText) {
    if (text.trim().length) {
        const newTodo = {
            id: Date.now().toString(),
            text: text,
            completed: false
        }
        setText('')
    
        return {
            type: TODO_ADD,
            payload: newTodo
        }
    } else {
        return {
            type: "UNDEFINED"
        }
    }
}

export function todoRemove(todos, id) {
    const newTodo = todos.filter(todo => todo.id !== id)

    return {
        type: TODO_REMOVE,
        payload: newTodo
    }
}

export function todoChecked(todos, id) {
    const newTodo = todos.map(todo => {
        if (todo.id !== id) return todo;
  
        return {
          ...todo,
          completed: !todo.completed
        }
    })

    return {
        type: TODO_CHECKED,
        payload: newTodo
    }
}

export function handlerTextChange(text) {
    return {
        type: TEXT,
        payload: text
    }
}