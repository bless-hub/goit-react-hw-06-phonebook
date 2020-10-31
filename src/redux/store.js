import { createStore, combineReducers } from "redux";
import taskReducer from "./tasks/tasksReducers";

const rootReducer = combineReducers({ task: taskReducer });

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
