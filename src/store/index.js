import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";

import usersReducer from "./reducers/users";

const store = createStore(
  combineReducers({
    users: usersReducer
  }),
  applyMiddleware(thunk)
);

export default store;
