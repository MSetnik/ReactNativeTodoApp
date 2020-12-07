import {ADD_USER, USER_LOGGEDIN} from '../actions/types';

let lastId = 0;

export default function userReducer(state = [], action) {
    switch(action.type) {
        case ADD_USER:
            return [
                ...state,
                {
                    id: ++lastId,
                    username: action.payload.username,
                    password: action.payload.password,
                    signedIn: false
                }
            ];

        case USER_LOGGEDIN:
            state.forEach(user => {
                if(user.id == action.payload.id) {
                    user.signedIn = action.payload.success
                }
            });
            return state;

        default:
            return state;
    }
}
