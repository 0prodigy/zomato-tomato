import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { reducer } from "../LandingPage/Redux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ reducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
