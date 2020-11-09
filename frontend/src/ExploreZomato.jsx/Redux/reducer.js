import * as constants from "./actionTypes";

const initialState = {
  error: false,
  errorMessage: "",
  isLoading: false,
  restaurants: [],
};

export const restaurantFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.RESTAURANT_FILTER_REQUEST:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case constants.RESTAURANT_FILTER_SUCCESS:
      return {
        ...state,
        isLoading: action.isLoading,
        error: action.error,
        restaurants: action.restaurants,
      };

    case constants.RESTAURANT_FILTER_FAILURE:
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
