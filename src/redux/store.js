// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./tasks/tasksReducers";

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

// const rootReducer = combineReducers({
//   tasks: taskReducer,
// });

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

export default store;
