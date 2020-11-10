import { constant } from "lodash";
import * as constants from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  isLoading: false,
  restaurant: {},
  cart: [],
};

export const restaurantReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RESTAURANT_FETCH_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.RESTAURANT_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        restaurant: action.restaurant,
      };

    case constants.RESTAURANT_FETCH_FAILURE:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        errorMessage: action.message,
      };
    default:
      return state;
  }
};
