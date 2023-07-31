import { applyMiddleware, createStore, Store } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { appReducer, AppState } from "./store/index.ts";

const store: Store<AppState> = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware())
);
export default store;
