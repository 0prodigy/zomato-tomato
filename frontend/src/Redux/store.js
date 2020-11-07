import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { landingPageReducer } from "../LandingPage/Redux/reducer";
import { resturantReducer } from "../RestroPage/Redux/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({ landingPageReducer, resturantReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
