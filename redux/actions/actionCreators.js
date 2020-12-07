import * as actions from './types';


export function todoAdded(userId, todoText) {
    return {
        type: actions.ADD_TODO,
        payload: {
          userId: userId,
          todoText: todoText
        }
      };
}

export function todoDelete(todoId) {
  return {
      type: actions.DELETE_TODO,
      payload: {
        id: todoId
      }
    };
}

export function getUserTodos(id) {
  return {
    type: actions.USER_TODOS,
    payload: {
      userId: id
    }
  }
}

export function addUser(username, password) {
  return {
    type: actions.ADD_USER,
    payload: {
      username: username,
      password: password
    }
  }
}

export function userLoggedIn(id,success) {
  return {
    type: actions.USER_LOGGEDIN,
    payload: {
      id: id,
      success: success
    }
  }
}
