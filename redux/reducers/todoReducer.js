import {ADD_TODO, DELETE_TODO, USER_TODOS} from '../actions/types';

let lastId = 0;

export default function todoReducer(state = [], action) {
    switch(action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    id: ++lastId,
                    userId: action.payload.userId,
                    todoText: action.payload.todoText,
                    done: false
                }
            ];

        case DELETE_TODO:
            return state.filter(todo => todo.id != action.payload.id)
            
        case USER_TODOS:
            var userTodos = []
            userTodos.push(state.filter(todo => todo.userId == action.payload.userId));
            console.log(state)
            return state.filter(todo => todo.id == 1);//state.filter(todo => todo.userId == action.payload.userId)
            
        
        default:
            return state;
    }
}
