import { useContext, createContext } from "react";

const todoContext = createContext({
    todos: [{
        id: 1,
        todo: 'Todo Message',
        completed: false,
    }],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
});

const todoProvider = todoContext.Provider;

export const useTodo = () => {
    return useContext(todoContext);
}