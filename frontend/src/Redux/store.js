import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { landingPageReducer } from "../LandingPage/Redux/reducer";
import { restaurantReducer } from "../RestroPage/Redux/reducer";
import { collectionPageReducer } from "../CollectionsPage/Redux/reducer";
import thunk from "redux-thunk";
import { restaurantFilterReducer } from "../ExploreZomato/Redux/reducer";

const rootReducer = combineReducers({
  landingPageReducer,
  collectionPageReducer,
  restaurantReducer,
  restaurantFilterReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["restaurantReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

let persistor = persistStore(store);

export { store, persistor };
