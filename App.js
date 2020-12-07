import React, { useState } from "react";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import * as actionCreators from "./redux/actions/actionCreators";
import Main from "./components/mainScreen";

export default function App() {
  store.dispatch(actionCreators.todoAdded(1, "new todo user user"));
  store.dispatch(actionCreators.todoAdded(1, "todo user 1"));

  store.dispatch(actionCreators.todoAdded(2, "todo user test"));
  store.dispatch(actionCreators.todoAdded(2, "user 2 new todo"));

  store.dispatch(actionCreators.addUser("user", "user"));
  store.dispatch(actionCreators.addUser("test", "test"));

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
