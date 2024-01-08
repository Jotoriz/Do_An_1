import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import rootReducer from "../Reuducers/index";
import { thunk, withExtraArgument } from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
